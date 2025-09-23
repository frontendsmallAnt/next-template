'use client'
import { Button } from "@/components/ui/button"
import { db } from "@/server/db/db"
import { Users } from "@/server/db/schema"
import { auth } from "@/auth"
import UserInfo from './UserInfo'
import { trpcClientReact } from '@/utils/api'
import { SignInButton, SignOutButton } from "@/components/auth-buttons"
import { memo } from "react"

function Home() {
  const { data, isLoading, error } = trpcClientReact.hello.useQuery(void 0, {
    refetchOnWindowFocus: false,
    
  })

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">NextAuth.js v5 示例</h1>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Hello, {data}!</p>}
      <UserInfo />
    </div>
  );
}

// 使用 memo 优化渲染性能，避免不必要的重新渲染
export default memo(Home)
