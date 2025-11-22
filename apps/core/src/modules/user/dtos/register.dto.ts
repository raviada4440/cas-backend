import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

export const UserRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().max(255).optional(),
  image: z.string().url().optional(),
})

export class UserRegisterDto extends createZodDto(UserRegisterSchema) {}

export type UserRegisterInput = z.infer<typeof UserRegisterSchema>
