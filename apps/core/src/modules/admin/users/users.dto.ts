import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { InviteUserRequestSchema, InviteUserResponseSchema } from '@shared/contracts/auth'
import { UserDetail, UserListResponse } from '@shared/contracts/users'

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

export const UserEmailQuerySchema = z
  .object({
    email: z.string().email(),
  })
  .strict()

export class UserEmailQueryDto extends createZodDto(UserEmailQuerySchema) {}
export type UserEmailQuery = z.infer<typeof UserEmailQuerySchema>

export class UserDetailDto extends createZodDto(UserDetail) {}

export class UserListResponseDto extends createZodDto(UserListResponse) {}

export class InviteUserRequestAdminDto extends createZodDto(InviteUserRequestSchema) {}
export class InviteUserResponseAdminDto extends createZodDto(InviteUserResponseSchema) {}
