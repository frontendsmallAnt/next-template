import { Button } from "@/components/ui/button"
import { db } from "@/server/db/db"
import { Users } from "@/server/db/schema"
import { auth } from "@/auth"
import UserInfo from './UserInfo'
import { SignInButton, SignOutButton } from "@/components/auth-buttons"

export default async function Home() {
  const session = await auth()

  // 方法1: 使用 select 选择特定字段
  const users = await db.select().from(Users)

  // 方法2: 使用 where 条件查询
  // const users = await db.select().from(Users).where(eq(Users.id, 1))
  
  // 方法3: 使用原始SQL
  // const users = await db.execute(sql`SELECT * FROM users`)
  
  // 方法4: 使用预处理语句
  // const users = await db.prepare('SELECT * FROM users').execute()
  console.log(users, session, 'uuuuuuuuuu')
  
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">NextAuth.js v5 示例</h1>
        {session ? (
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <p className="text-green-800">
              欢迎, {session.user?.name || session.user?.email}!
            </p>
            <p className="text-sm text-green-600 mt-2">
              用户ID: {session.user?.id}
            </p>
            <SignOutButton />
          </div>
        ) : (
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <p className="text-blue-800 mb-2">您尚未登录</p>
            <SignInButton />
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">数据库用户列表</h2>
        {users.length > 0 ? (
          <div className="space-y-2">
            {users.map((user: typeof Users.$inferSelect) => (
              <div key={user.id} className="flex justify-between bg-gray-100 p-3 rounded">
                <p className="font-medium">name: {user.name}</p>
                <p className="text-sm text-gray-600">ID: {user.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">没有找到用户</p>
        )}
      </div>

      <UserInfo />
    </div>
  );
}
