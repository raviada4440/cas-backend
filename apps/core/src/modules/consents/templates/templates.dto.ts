import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  ConsentTemplateLifecycleActionInput,
  ConsentTemplateStatus,
  ConsentType,
  CreateConsentTemplateInput,
  UpdateConsentTemplateInput,
} from '@shared/contracts/consents'

const ConsentTemplateIdParamSchema = z.object({
  id: z.string().uuid(),
})

const CreateConsentTemplateSchema = CreateConsentTemplateInput.extend({
  effectiveDate: z.string().datetime().optional(),
})

const UpdateConsentTemplateSchema = UpdateConsentTemplateInput.omit({ templateId: true })

const listQuerySchema = z.object({
  organizationId: z.string().uuid().optional(),
  consentType: ConsentType.optional(),
  status: ConsentTemplateStatus.optional(),
  isGlobal: z
    .union([z.boolean(), z.string()])
    .transform((value) => {
      if (typeof value === 'boolean') return value
      if (value === undefined || value === null || value === '') return undefined
      return value.toLowerCase() === 'true'
    })
    .optional(),
  limit: z
    .union([z.number(), z.string()])
    .transform((value) => {
      if (typeof value === 'number') return value
      if (!value) return undefined
      const parsed = Number(value)
      return Number.isFinite(parsed) ? parsed : undefined
    })
    .optional(),
  offset: z
    .union([z.number(), z.string()])
    .transform((value) => {
      if (typeof value === 'number') return value
      if (!value) return undefined
      const parsed = Number(value)
      return Number.isFinite(parsed) ? parsed : undefined
    })
    .optional(),
})

const activeQuerySchema = z.object({
  organizationId: z.string().uuid().optional(),
  consentType: ConsentType.optional(),
})

const statsQuerySchema = z.object({
  organizationId: z.string().uuid().optional(),
})

const cloneSchema = z.object({
  newName: z.string().min(1),
  organizationId: z.string().uuid().optional(),
})

export class ConsentTemplateIdParamDto extends createZodDto(ConsentTemplateIdParamSchema) {}

export class CreateConsentTemplateDto extends createZodDto(CreateConsentTemplateSchema) {}

export class UpdateConsentTemplateDto extends createZodDto(UpdateConsentTemplateSchema) {}

export class ConsentTemplateListQueryDto extends createZodDto(listQuerySchema) {}

export class ConsentTemplateActiveQueryDto extends createZodDto(activeQuerySchema) {}

export class ConsentTemplateStatsQueryDto extends createZodDto(statsQuerySchema) {}

export class ConsentTemplateLifecycleDto extends createZodDto(
  ConsentTemplateLifecycleActionInput,
) {}

export class CloneConsentTemplateDto extends createZodDto(cloneSchema) {}
