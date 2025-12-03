import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const dynamicContentSchema = z
  .object({
    subject: z.string(),
    'pico-link': z.string(),
    'button-cta': z.string(),
    'current-year': z.string(),
    'action-title': z.string().optional(),
    'action-highlight': z.string().optional(),
    'action-subhead': z.string().optional(),
    'action-content': z.string().optional(),
    'pico-response': z.string().optional(),
    'building-id': z.string().optional(),
    'recommendation-id': z.string().optional(),
    'task-id': z.string().optional(),
    'building-comment-id': z.string().optional(),
    'activity-feed-id': z.string().optional(),
    environment: z.string().optional(),
  })
  .passthrough()

export const sendEmailSchema = z.object({
  from: z.string().email(),
  to: z.array(z.string().email()).min(1),
  templateId: z.string().optional(),
  dynamicContent: dynamicContentSchema,
})

export type SendEmailSchema = z.infer<typeof sendEmailSchema>

export class SendEmailDto extends createZodDto(sendEmailSchema) {}
