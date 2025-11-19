import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

import { UserSchema } from '@db/client/zod'

import { UserSchemaProjection } from '../user.protect'

export const UserRegisterSchema = UserSchema.omit(UserSchemaProjection).extend({
  socialIds: z.record(z.string(), z.string()).optional(),
})

export class UserRegisterDto extends createZodDto(UserRegisterSchema) {}

export type UserRegisterInput = z.infer<typeof UserRegisterSchema>
