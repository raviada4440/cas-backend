import { z } from 'zod'
import { UserAttributeUserTypeEnum } from './users'

export const LoginRequestSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict()

export const LoginUserSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string().email(),
    name: z.string().nullable(),
    image: z.string().nullable(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .passthrough()

export const TenantMembershipSchema = z
  .object({
    // Organization identifier (tenant)
    id: z.string().uuid(),
    // Backwards-compatible display name; mirrors organizationName
    name: z.string().nullable(),
    slug: z.string().nullable().optional(),
    // Enriched organization/provider context
    organizationName: z.string().nullable().optional(),
    organizationType: z.string().nullable().optional(),
    providerOrganizationId: z.string().uuid().nullable().optional(),
    providerId: z.string().uuid().nullable().optional(),
    providerName: z.string().nullable().optional(),
    providerNpi: z.string().nullable().optional(),
    labName: z.string().nullable().optional(),
    tenantType: z.enum(['organization', 'lab']).optional(),
  })
  .strict()

export type TenantMembership = z.infer<typeof TenantMembershipSchema>

export const LoginResponseSchema = LoginUserSchema.extend({
  token: z.string().min(1),
  accessToken: z.string().min(1),
  user: LoginUserSchema,
  tenants: z.array(TenantMembershipSchema).default([]),
  isSuperAdmin: z.boolean().default(false),
}).passthrough()

export const AccessTokenResponseSchema = z
  .object({
    token: z.string().min(1),
    expiresAt: z.string().datetime(),
    tenants: z.array(TenantMembershipSchema).default([]),
    isSuperAdmin: z.boolean().default(false),
  })
  .strict()

export const SystemTokenRequestSchema = z
  .object({
    org: z.string().min(1),
    scopes: z.array(z.string().min(1)).optional(),
    audience: z.string().min(1).optional(),
  })
  .strict()

export const SystemTokenQuerySchema = z
  .object({
    org: z.string().min(1),
  })
  .strict()

export const SystemTokenOrganizationSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    displayName: z.string(),
    issuer: z.string(),
    fhirBase: z.string(),
    authTokenMethod: z.string().optional(),
    supportsLaunch: z.boolean().optional(),
    supportsUserinfo: z.boolean().optional(),
  })
  .strict()

export const SystemTokenResponseSchema = z
  .object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    expires_in: z.number().int().positive(),
    scope: z.string(),
    audience: z.string(),
    issued_at: z.number().int().positive(),
    organization: SystemTokenOrganizationSchema,
  })
  .strict()

export const SystemTokenConfigResponseSchema = z
  .object({
    organization: SystemTokenOrganizationSchema.extend({
      authTokenMethod: z.string().optional(),
      supportsLaunch: z.boolean().optional(),
      supportsUserinfo: z.boolean().optional(),
    }),
    supportedScopes: z.array(z.string()),
    defaultScopes: z.array(z.string()),
    tokenEndpoint: z.string(),
    authorizationEndpoint: z.string(),
  })
  .strict()

export const InviteUserRequestSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    userType: UserAttributeUserTypeEnum.optional(),
    orgId: z.string().uuid().optional(),
  })
  .strict()

export const InvitedUserSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().nullable(),
    email: z.string().email(),
    emailVerified: z.string().datetime().nullable(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    userType: UserAttributeUserTypeEnum.nullable(),
  })
  .strict()

export const InviteUserResponseSchema = z
  .object({
    user: InvitedUserSchema,
    verificationToken: z.string(),
    expiresAt: z.string().datetime(),
  })
  .strict()

export const ResendVerificationRequestSchema = z
  .object({
    email: z.string().email(),
  })
  .strict()

export const VerifyEmailRequestSchema = z
  .object({
    token: z.string().min(1),
  })
  .strict()

export const VerificationStatusSchema = z
  .object({
    success: z.boolean(),
    reason: z.string().optional(),
    token: z.string().optional(),
    expiresAt: z.string().datetime().optional(),
  })
  .strict()

export const SetPasswordRequestSchema = z
  .object({
    token: z.string().min(1),
    password: z
      .string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).+$/),
  })
  .strict()

export const SetPasswordResponseSchema = z
  .object({
    success: z.boolean(),
    userId: z.string().uuid(),
  })
  .strict()

export const LinkExternalIdentityRequestSchema = z
  .object({
    provider: z.string().min(1),
    issuer: z.string().min(1),
    subject: z.string().min(1),
    email: z.string().email().optional().nullable(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    fhirUser: z.string().optional().nullable(),
    orgId: z.string().uuid().optional().nullable(),
  })
  .strict()

export const LinkExternalIdentityResponseSchema = z
  .object({
    userId: z.string().uuid(),
  })
  .strict()

export type LoginRequest = z.infer<typeof LoginRequestSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
export type LoginUser = z.infer<typeof LoginUserSchema>
export type AccessTokenResponse = z.infer<typeof AccessTokenResponseSchema>
export type SystemTokenRequest = z.infer<typeof SystemTokenRequestSchema>
export type SystemTokenResponse = z.infer<typeof SystemTokenResponseSchema>
export type SystemTokenConfigResponse = z.infer<typeof SystemTokenConfigResponseSchema>
export type SystemTokenConfig = SystemTokenConfigResponse
export type InviteUserRequest = z.infer<typeof InviteUserRequestSchema>
export type InviteUserResponse = z.infer<typeof InviteUserResponseSchema>
export type ResendVerificationRequest = z.infer<typeof ResendVerificationRequestSchema>
export type VerifyEmailRequest = z.infer<typeof VerifyEmailRequestSchema>
export type VerificationStatus = z.infer<typeof VerificationStatusSchema>
export type SetPasswordRequest = z.infer<typeof SetPasswordRequestSchema>
export type SetPasswordResponse = z.infer<typeof SetPasswordResponseSchema>
export type SystemTokenQuery = z.infer<typeof SystemTokenQuerySchema>
export type LinkExternalIdentityRequest = z.infer<typeof LinkExternalIdentityRequestSchema>
export type LinkExternalIdentityResponse = z.infer<typeof LinkExternalIdentityResponseSchema>


