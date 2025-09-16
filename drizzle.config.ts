import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: './src/server/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    out: './drizzle',
    verbose: true,
    strict: true,
    // schemaFilter: (table) => table.name !== 'users',
})