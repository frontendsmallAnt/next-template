import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// 使用 postgres-js 客户端
const queryClient = postgres(process.env.DATABASE_URL!)

export const db = drizzle(queryClient, { schema })


