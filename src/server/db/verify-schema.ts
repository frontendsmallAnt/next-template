import { createInsertSchema } from 'drizzle-zod'
// import { z } from 'zod'

import { Users } from './schema'

export const createUser = createInsertSchema(Users, {
    email: (schema) => schema.email() 
})

export const updateUser = createUser.pick({ email: true })