import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { AuditLogList, TestAuditQuery } from '@shared/contracts/catalog'

export const AuditTestIdParamSchema = z
  .object({
    testId: z.string().uuid(),
  })
  .strict()

export class AuditTestIdParamDto extends createZodDto(AuditTestIdParamSchema) {}

export class AuditLogListDto extends createZodDto(AuditLogList) {}

export class AuditQueryDto extends createZodDto(TestAuditQuery) {}

export type AuditQuery = z.infer<typeof TestAuditQuery>
