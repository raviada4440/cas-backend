import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

export const UserSearchQuerySchema = z
  .object({
    search: z.string().trim().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).default(50),
  })
  .strict()

export class UserSearchQueryDto extends createZodDto(UserSearchQuerySchema) {}
export type UserSearchQuery = z.infer<typeof UserSearchQuerySchema>

export const UserIdParamSchema = z
  .object({
    userId: z.string().uuid(),
  })
  .strict()

export class UserIdParamDto extends createZodDto(UserIdParamSchema) {}
export type UserIdParam = z.infer<typeof UserIdParamSchema>
