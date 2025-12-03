import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { AttachmentCreateInput, AttachmentResponseSchema } from '@shared/contracts/attachments'

export class CreateAttachmentDto extends createZodDto(AttachmentCreateInput) {}

export class AttachmentResponseDto extends createZodDto(AttachmentResponseSchema) {}

export const AttachmentIdParamSchema = z
  .object({
    attachmentId: z.string().uuid(),
  })
  .strict()

export class AttachmentIdParamDto extends createZodDto(AttachmentIdParamSchema) {}
