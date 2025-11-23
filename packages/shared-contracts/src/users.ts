import { z } from 'zod/v4'

export const UserSummary = z.object({
  id: z.string().uuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  hasPassword: z.boolean().optional(),
  createdAt: z.string().nullable(),
})
export type UserSummary = z.infer<typeof UserSummary>

export const UserDetail = UserSummary.extend({
  userAttribute: z.object({ userType: z.string().nullable() }).optional().nullable(),
  updatedAt: z.string().nullable(),
})
export type UserDetail = z.infer<typeof UserDetail>

export const UserListResponse = z.object({
  items: z.array(UserSummary),
})
export type UserListResponse = z.infer<typeof UserListResponse>



