import { createZodDto } from 'nestjs-zod/dto'

import {
  AccessTokenResponseSchema,
  InviteUserRequestSchema,
  InviteUserResponseSchema,
  LinkExternalIdentityRequestSchema,
  LinkExternalIdentityResponseSchema,
  LoginRequestSchema,
  LoginResponseSchema,
  ResendVerificationRequestSchema,
  SetPasswordRequestSchema,
  SetPasswordResponseSchema,
  SystemTokenConfigResponseSchema,
  SystemTokenQuerySchema,
  SystemTokenRequestSchema,
  SystemTokenResponseSchema,
  VerificationStatusSchema,
  VerifyEmailRequestSchema,
} from '@shared/contracts/auth'

export { AccessTokenResponseSchema, SystemTokenQuerySchema } from '@shared/contracts/auth'
export type { SystemTokenQuery } from '@shared/contracts/auth'

export class AccessTokenResponseDto extends createZodDto(AccessTokenResponseSchema) {}

export class LoginRequestDto extends createZodDto(LoginRequestSchema) {}

export class LoginResponseDto extends createZodDto(LoginResponseSchema) {}

export class SystemTokenRequestDto extends createZodDto(SystemTokenRequestSchema) {}

export class SystemTokenResponseDto extends createZodDto(SystemTokenResponseSchema) {}

export class SystemTokenConfigResponseDto extends createZodDto(SystemTokenConfigResponseSchema) {}

export class SystemTokenQueryDto extends createZodDto(SystemTokenQuerySchema) {}

export class InviteUserRequestDto extends createZodDto(InviteUserRequestSchema) {}

export class InviteUserResponseDto extends createZodDto(InviteUserResponseSchema) {}

export class ResendVerificationRequestDto extends createZodDto(ResendVerificationRequestSchema) {}

export class VerifyEmailRequestDto extends createZodDto(VerifyEmailRequestSchema) {}

export class VerificationStatusDto extends createZodDto(VerificationStatusSchema) {}

export class SetPasswordRequestDto extends createZodDto(SetPasswordRequestSchema) {}

export class SetPasswordResponseDto extends createZodDto(SetPasswordResponseSchema) {}

export class LinkExternalIdentityRequestDto extends createZodDto(
  LinkExternalIdentityRequestSchema,
) {}

export class LinkExternalIdentityResponseDto extends createZodDto(
  LinkExternalIdentityResponseSchema,
) {}
