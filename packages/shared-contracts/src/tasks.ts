import { z } from 'zod/v4'

import { UtcDateTime, Uuid } from './common'

export const ApprovalStatusSchema = z.enum(['PENDING', 'APPROVED', 'REJECTED'])
export type ApprovalStatus = z.infer<typeof ApprovalStatusSchema>

export const TaskItemSchema = z
  .object({
    id: Uuid,
    testId: Uuid,
    testName: z.string(),
    versionId: Uuid,
    versionNumber: z.number().int(),
    stepName: z.string(),
    status: ApprovalStatusSchema,
    createdAt: UtcDateTime,
  })
  .strict()

export type TaskItem = z.infer<typeof TaskItemSchema>

export const TaskListResponseSchema = z
  .object({
    items: z.array(TaskItemSchema),
  })
  .strict()

export type TaskListResponse = z.infer<typeof TaskListResponseSchema>

export const MyTasksQuerySchema = z
  .object({
    limit: z.coerce.number().int().min(1).max(20).optional(),
  })
  .strict()

export type MyTasksQuery = z.infer<typeof MyTasksQuerySchema>

