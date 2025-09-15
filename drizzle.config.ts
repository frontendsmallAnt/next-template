import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: './src/server/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'mysecretpassword',
        database: 'postgres',
        ssl: false,
    },
    out: './drizzle',
    verbose: true,
    strict: true,
    // schemaFilter: (table) => table.name !== 'users',
})