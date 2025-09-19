import { initTRPC, TRPCError } from '@trpc/server'
import { auth } from "@/auth"
export const createContext = async () => {
        //获取session
        const session = await auth()

        if(!session?.user) {
            throw new TRPCError({
                code: 'FORBIDDEN',
                message: 'session有误',
            })
        }
        return {
            session
        }
        }
const t = initTRPC.context<typeof createContext>().create()
const { router, procedure } = t

export const testRouter = router({
    hello: procedure.query(async ({ctx}) => {
        console.log('--->',ctx.session)
        return 'hello world'
    })
})

export type TestRouter = typeof testRouter