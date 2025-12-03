import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

export const ReviewerResponseSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().nullable(),
    email: z.string().nullable(),
  })
  .strict()

export class ReviewerResponseDto extends createZodDto(ReviewerResponseSchema) {}

export type ReviewerResponse = z.infer<typeof ReviewerResponseSchema>
