import * as z from 'zod/v4'

export const EmailValidationInput = z.object({
  email: z.string().email('Invalid email format'),
})
export type EmailValidationInput = z.infer<typeof EmailValidationInput>

export const EmailValidationResult = z.object({
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
export type EmailValidationResult = z.infer<typeof EmailValidationResult>

export const EmailValidationResponse = z.object({
  result: EmailValidationResult,
})
export type EmailValidationResponse = z.infer<typeof EmailValidationResponse>

