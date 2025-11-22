import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().max(255).nonempty(),
})

export class UserLoginDto extends createZodDto(loginSchema) {}
