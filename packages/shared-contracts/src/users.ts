import { z } from 'zod/v4'

import { ProviderDetail, ProviderOrganizationRecord } from './providers'
import { Uuid } from './common'

export const UserAttributeUserTypeEnum = z.enum(['Admin', 'Provider', 'Organization'])

export const UserSummary = z.object({
  id: z.string().uuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  hasPassword: z.boolean().optional(),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable().optional(),
  emailVerified: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  userAttribute: z
    .object({
      userType: UserAttributeUserTypeEnum.nullable(),
    })
    .optional()
    .nullable(),
})
export type UserSummary = z.infer<typeof UserSummary>

export const UserDetail = UserSummary.extend({
  roles: z
    .array(
      z
        .object({
          id: Uuid,
          name: z.string(),
          description: z.string().nullable(),
          permissions: z.array(z.string()).optional(),
        })
        .strict(),
    )
    .optional(),
  providerProfile: ProviderDetail.extend({
    organizations: z.array(ProviderOrganizationRecord),
  })
    .optional()
    .nullable(),
})
export type UserDetail = z.infer<typeof UserDetail>

export const UserListResponse = z.object({
  items: z.array(UserSummary),
})
export type UserListResponse = z.infer<typeof UserListResponse>
