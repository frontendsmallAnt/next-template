import { createContext, serverCaller } from '@/utils/trpc'

export default async function Home() {
    // 创建 context
    const context = await createContext()
    
    // 使用 createCallerFactory 创建的 caller
    const caller = serverCaller(context)
    
    // 调用 API
    const helloData = await caller.hello()
    const worldData = await caller.world()
    
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Hello: {helloData}</p>
            <p>World: {worldData}</p>
        </div>
    )
}
