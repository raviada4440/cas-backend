import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const phoneValidationInputSchema = z.object({
  phone: z
    .string()
    .min(6, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/[0-9()+\-.\s]+/, 'Phone number contains invalid characters'),
})

const phoneValidationResultSchema = z.object({
  normalized: z.string(),
  nationalFormat: z.string().nullable(),
  countryCode: z.string().nullable(),
  lineType: z.string().nullable(),
  carrierName: z.string().nullable(),
  status: z.enum(['valid', 'invalid', 'unknown']),
  risk: z.enum(['low', 'medium', 'high']).nullable(),
  message: z.string().nullable(),
})

const phoneValidationResponseSchema = z.object({
  result: phoneValidationResultSchema,
})

export class PhoneValidationDto extends createZodDto(phoneValidationInputSchema) {}
export type PhoneValidationResult = z.infer<typeof phoneValidationResponseSchema>
