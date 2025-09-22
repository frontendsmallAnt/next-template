import { initTRPC, TRPCError } from '@trpc/server'
import { auth } from "@/auth"
export const createContext = async () => {
    //获取session
    const session = await auth()
    return {
        session
    }
}
const t = initTRPC.context<typeof createContext>().create()
const { router, procedure, middleware } = t

const middlewareObj = middleware(async({ctx, next}) => {
    const now = Date.now();
    const result = await next() 
    console.log('api-time', Date.now() - now)
    return result
})

const checkLoginMiddleware = middleware(async ({ctx, next}) => {
    if(!ctx.session?.user) {
        throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'session有误',
        })
    }
    return next()
})

const loggerProcedure = procedure.use(middlewareObj)
const protectedProcedure = procedure.use(checkLoginMiddleware)
export const testRouter = router({
    hello: loggerProcedure.query(async ({ ctx }) => {
        return 'hello'
    }),
    world: protectedProcedure.query(async ({ ctx }) => {
        console.log('--->', ctx.session)
        return 'world'
    }),
})

export type TestRouter = typeof testRouter