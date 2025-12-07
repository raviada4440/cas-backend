import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  AssignConsentTemplateInput,
  UpdateTestCatalogVersionConsentInput,
  ReorderVersionConsentsInput,
} from '@shared/contracts/consents'

const VersionIdParamSchema = z.object({
  versionId: z.string().uuid(),
})

const VersionConsentIdParamSchema = z.object({
  versionConsentId: z.string().uuid(),
})

const AssignVersionConsentSchema = AssignConsentTemplateInput.omit({ versionId: true })

const UpdateVersionConsentSchema = UpdateTestCatalogVersionConsentInput.omit({
  versionConsentId: true,
})

const ReorderVersionConsentsSchema = ReorderVersionConsentsInput.omit({ versionId: true })

export class VersionIdParamDto extends createZodDto(VersionIdParamSchema) {}

export class VersionConsentIdParamDto extends createZodDto(VersionConsentIdParamSchema) {}

export class AssignVersionConsentDto extends createZodDto(AssignVersionConsentSchema) {}

export class UpdateVersionConsentDto extends createZodDto(UpdateVersionConsentSchema) {}

export class ReorderVersionConsentsDto extends createZodDto(ReorderVersionConsentsSchema) {}
