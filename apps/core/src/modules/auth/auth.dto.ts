import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  InviteUserRequestSchema,
  InviteUserResponseSchema,
  LoginRequestSchema,
  LoginResponseSchema,
  ResendVerificationRequestSchema,
  SetPasswordRequestSchema,
  SetPasswordResponseSchema,
  SystemTokenConfigResponseSchema,
  SystemTokenRequestSchema,
  SystemTokenResponseSchema,
  VerificationStatusSchema,
  VerifyEmailRequestSchema,
} from '@shared/contracts/auth'

export const AccessTokenResponseSchema = z
  .object({
    token: z.string().min(1),
    expiresAt: z.string().datetime(),
  })
  .strict()

export class AccessTokenResponseDto extends createZodDto(AccessTokenResponseSchema) {}

export class LoginRequestDto extends createZodDto(LoginRequestSchema) {}

export class LoginResponseDto extends createZodDto(LoginResponseSchema) {}

export class SystemTokenRequestDto extends createZodDto(SystemTokenRequestSchema) {}

export class SystemTokenResponseDto extends createZodDto(SystemTokenResponseSchema) {}

export class SystemTokenConfigResponseDto extends createZodDto(SystemTokenConfigResponseSchema) {}

export const SystemTokenQuerySchema = z
  .object({
    org: z.string().min(1),
  })
  .strict()

export class SystemTokenQueryDto extends createZodDto(SystemTokenQuerySchema) {}

export type SystemTokenQuery = z.infer<typeof SystemTokenQuerySchema>

export class InviteUserRequestDto extends createZodDto(InviteUserRequestSchema) {}

export class InviteUserResponseDto extends createZodDto(InviteUserResponseSchema) {}

export class ResendVerificationRequestDto extends createZodDto(ResendVerificationRequestSchema) {}

export class VerifyEmailRequestDto extends createZodDto(VerifyEmailRequestSchema) {}

export class VerificationStatusDto extends createZodDto(VerificationStatusSchema) {}

export class SetPasswordRequestDto extends createZodDto(SetPasswordRequestSchema) {}

export class SetPasswordResponseDto extends createZodDto(SetPasswordResponseSchema) {}
