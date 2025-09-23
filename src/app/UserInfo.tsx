'use client'
import { useSession } from "next-auth/react"
import { memo } from "react"

function UserInfo() {
  const { data: session, status } = useSession()
  
  // 只在状态变化时打印，避免频繁日志
  console.log('UserInfo render:', { status, userName: session?.user?.name })
  
  // 加载状态
  if (status === "loading") {
    return <div>加载中...</div>
  }
  
  // 未登录状态
  if (status === "unauthenticated") {
    return <div>未登录</div>
  }
  
  // 已登录状态
  return (
    <div>
      {session?.user?.name || '匿名用户'}
    </div>
  )
}

// 使用 memo 优化渲染性能
export default memo(UserInfo)