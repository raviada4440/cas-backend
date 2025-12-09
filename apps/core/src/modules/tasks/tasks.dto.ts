import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  MyTasksQuerySchema,
  TaskItemSchema,
  TaskListResponseSchema,
} from '@shared/contracts/tasks'

export class MyTasksQueryDto extends createZodDto(MyTasksQuerySchema) {}
export type MyTasksQuery = z.infer<typeof MyTasksQuerySchema>

export class TaskListResponseDto extends createZodDto(TaskListResponseSchema) {}
export type TaskItem = z.infer<typeof TaskItemSchema>
export type TaskListResponse = z.infer<typeof TaskListResponseSchema>

