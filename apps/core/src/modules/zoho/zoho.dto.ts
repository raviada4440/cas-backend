import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

export const LeadPayloadSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  organization: z.string().trim().optional(),
  email: z.string().trim().email('Invalid email'),
  phone: z.string().trim().optional(),
  leadSource: z.string().trim().optional(),
  message: z.string().trim().optional(),
  website: z.string().trim().optional(), // Honeypot field
  formLoadTime: z.coerce.number().int().nonnegative().optional(),
})

export class LeadPayloadDto extends createZodDto(LeadPayloadSchema) {}
export type LeadPayload = z.infer<typeof LeadPayloadSchema>
