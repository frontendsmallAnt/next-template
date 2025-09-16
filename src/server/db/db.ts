import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// 使用 postgres-js 客户端
const queryClient = postgres('postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable')

export const db = drizzle(queryClient, { schema })


