import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const uuidSchema = z.string().uuid()

const roleIdParamSchema = z.object({
  id: uuidSchema,
})

const roleNameParamSchema = z.object({
  name: z.string().min(1),
})

const userIdParamSchema = z.object({
  userId: uuidSchema,
})

const createRoleSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  permissions: z.array(z.string()).default([]),
})

const updateRoleSchema = createRoleSchema.partial()

const paginationSchema = z.object({
  limit: z
    .union([z.number(), z.string()])
    .optional()
    .transform((value) => {
      if (typeof value === 'number') return value
      if (typeof value === 'string' && value.trim().length > 0) {
        const parsed = Number(value)
        return Number.isFinite(parsed) ? parsed : undefined
      }
      return undefined
    }),
  offset: z
    .union([z.number(), z.string()])
    .optional()
    .transform((value) => {
      if (typeof value === 'number') return value
      if (typeof value === 'string' && value.trim().length > 0) {
        const parsed = Number(value)
        return Number.isFinite(parsed) ? parsed : undefined
      }
      return undefined
    }),
})

const assignRoleSchema = z.object({
  userId: uuidSchema,
  assignedBy: uuidSchema.optional(),
  expiresAt: z
    .string()
    .optional()
    .transform((value) => {
      if (!value) return undefined
      const date = new Date(value)
      return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
    }),
})

const removeRoleSchema = z.object({
  userId: uuidSchema,
})

const updateUserRoleSchema = z.object({
  expiresAt: z
    .string()
    .optional()
    .transform((value) => {
      if (!value) return undefined
      const date = new Date(value)
      return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
    }),
})

const bulkAssignSchema = z.object({
  roleIds: z.array(uuidSchema).nonempty(),
  assignedBy: uuidSchema.optional(),
  expiresAt: z
    .string()
    .optional()
    .transform((value) => {
      if (!value) return undefined
      const date = new Date(value)
      return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
    }),
})

const permissionQuerySchema = z.object({
  permission: z.string().min(1),
})

export class RoleIdParamDto extends createZodDto(roleIdParamSchema) {}

export class RoleNameParamDto extends createZodDto(roleNameParamSchema) {}

export class UserIdParamDto extends createZodDto(userIdParamSchema) {}

export class CreateRoleDto extends createZodDto(createRoleSchema) {}

export class UpdateRoleDto extends createZodDto(updateRoleSchema) {}

export class ListRolesQueryDto extends createZodDto(paginationSchema) {}

export class AssignRoleDto extends createZodDto(assignRoleSchema) {}

export class RemoveRoleDto extends createZodDto(removeRoleSchema) {}

export class UpdateUserRoleDto extends createZodDto(updateUserRoleSchema) {}

export class BulkAssignRolesDto extends createZodDto(bulkAssignSchema) {}

export class PermissionQueryDto extends createZodDto(permissionQuerySchema) {}

export class ExpiredUserRolesQueryDto extends createZodDto(paginationSchema) {}
