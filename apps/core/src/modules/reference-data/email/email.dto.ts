import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const emailValidationInputSchema = z.object({
  email: z.string().email('Invalid email format'),
})

const emailValidationResultSchema = z.object({
  email: z.string(),
  normalized: z.string().nullable(),
  result: z.enum(['deliverable', 'undeliverable', 'risky', 'unknown']),
  reason: z.string().nullable(),
  disposable: z.boolean().nullable(),
  roleAccount: z.boolean().nullable(),
  freeEmail: z.boolean().nullable(),
  acceptAll: z.boolean().nullable(),
  suggestedCorrection: z.string().nullable(),
  message: z.string().nullable(),
})

const emailValidationResponseSchema = z.object({
  result: emailValidationResultSchema,
})

export class EmailValidationDto extends createZodDto(emailValidationInputSchema) {}
export type EmailValidationResult = z.infer<typeof emailValidationResponseSchema>

