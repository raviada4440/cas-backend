import * as z from 'zod/v4'

export const PhoneValidationInput = z.object({
  phone: z
    .string()
    .min(6, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/[0-9()+\-.\s]+/, 'Phone number contains invalid characters'),
})
export type PhoneValidationInput = z.infer<typeof PhoneValidationInput>

export const PhoneValidationResult = z.object({
  normalized: z.string(),
  nationalFormat: z.string().nullable(),
  countryCode: z.string().nullable(),
  lineType: z.string().nullable(),
  carrierName: z.string().nullable(),
  status: z.enum(['valid', 'invalid', 'unknown']),
  risk: z.enum(['low', 'medium', 'high']).nullable(),
  message: z.string().nullable(),
})
export type PhoneValidationResult = z.infer<typeof PhoneValidationResult>

export const PhoneValidationResponse = z.object({
  result: PhoneValidationResult,
})
export type PhoneValidationResponse = z.infer<typeof PhoneValidationResponse>

