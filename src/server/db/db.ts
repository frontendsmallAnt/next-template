import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// 使用 postgres-js 客户端
const queryClient = postgres({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',
    ssl: false,
})

export const db = drizzle(queryClient, { schema })


