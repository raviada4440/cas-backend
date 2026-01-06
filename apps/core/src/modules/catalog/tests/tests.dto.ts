import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CloneVersionInput as CloneVersionSchema,
  CreateDraftInput as CreateDraftVersionSchema,
  CreateTestInput as CreateTestInputSchema,
  ListTestsQuery as ListTestsQuerySchema,
  PublishVersionInput as PublishVersionSchema,
  RetireVersionInput as RetireVersionSchema,
  SetDefaultVersionInput as SetDefaultVersionSchema,
  TestAuditQuery as TestAuditQuerySchema,
  TestSearchQuery as TestSearchQuerySchema,
  UpdateTestInput as UpdateTestInputSchema,
  UpdateVersionBiomarkersInput as UpdateVersionBiomarkersSchema,
  UpdateVersionCptCodesInput as UpdateVersionCptCodesSchema,
  UpdateVersionLoincCodesInput as UpdateVersionLoincCodesSchema,
  UpdateVersionSpecimensInput as UpdateVersionSpecimensSchema,
  VersionDiffQuery as VersionDiffQuerySchema,
  VersionTypeQuery as VersionTypeQuerySchema,
  VersionUpdateInput as VersionUpdateSchema,
  AuditLog as AuditLogType,
  AuditLogList as AuditLogListType,
  CloneVersionInput as CloneVersionInputType,
  CreateDraftInput as CreateDraftVersionInputType,
  CreateTestInput as CreateTestInputType,
  ListTestsQuery as ListTestsQueryType,
  PagedTestSummary as TestListResponseType,
  PublishVersionInput as PublishVersionInputType,
  RetireVersionInput as RetireVersionInputType,
  SetDefaultVersionInput as SetDefaultVersionInputType,
  TestAuditQuery as TestAuditQueryType,
  TestDetail as TestDetailType,
  TestSearchQuery as TestSearchQueryType,
  TestSummary as TestSummaryType,
  UpdateTestInput as UpdateTestInputType,
  UpdateVersionBiomarkersInput as UpdateVersionBiomarkersInputType,
  UpdateVersionCptCodesInput as UpdateVersionCptCodesInputType,
  UpdateVersionLoincCodesInput as UpdateVersionLoincCodesInputType,
  UpdateVersionSpecimensInput as UpdateVersionSpecimensInputType,
  VersionDiffQuery as VersionDiffQueryType,
  VersionTypeQuery as VersionTypeQueryType,
  VersionUpdateInput as VersionUpdateInputType,
  TestCatalogStats as TestCatalogStatsSchema,
  TestCatalogStats as TestCatalogStatsType,
} from '@shared/contracts/catalog'
import {
  LabTestLookupResponse as LabTestLookupResponseSchema,
  LabTestLookupResponse as LabTestLookupResponseType,
} from '@shared/contracts/tests'

const UuidParamSchema = z
  .object({
    testId: z.string().uuid(),
  })
  .strict()

const VersionIdSchema = z
  .object({
    versionId: z.string().uuid(),
  })
  .strict()

export class ListTestsQueryDto extends createZodDto(ListTestsQuerySchema) {}
export type ListTestsQuery = ListTestsQueryType

export class TestSearchQueryDto extends createZodDto(TestSearchQuerySchema) {}
export type TestSearchQuery = TestSearchQueryType

export class LabTestLookupResponseDto extends createZodDto(LabTestLookupResponseSchema) {}
export type LabTestLookupResponse = LabTestLookupResponseType

export class CreateTestDto extends createZodDto(CreateTestInputSchema) {}
export type CreateTestInput = CreateTestInputType

export class UpdateTestDto extends createZodDto(UpdateTestInputSchema) {}
export type UpdateTestInput = UpdateTestInputType

export class TestIdParamDto extends createZodDto(UuidParamSchema) {}

export class TestVersionQueryDto extends createZodDto(
  z.object({
    versionId: z.string().uuid().optional(),
  }),
) {}

export class CreateDraftVersionDto extends createZodDto(CreateDraftVersionSchema) {}
export type CreateDraftVersionInput = CreateDraftVersionInputType

export class CloneVersionDto extends createZodDto(CloneVersionSchema) {}
export type CloneVersionInput = CloneVersionInputType

export class SetDefaultVersionDto extends createZodDto(SetDefaultVersionSchema) {}
export type SetDefaultVersionInput = SetDefaultVersionInputType

export class PublishVersionDto extends createZodDto(PublishVersionSchema) {}
export type PublishVersionInput = PublishVersionInputType

export class RetireVersionDto extends createZodDto(RetireVersionSchema) {}
export type RetireVersionInput = RetireVersionInputType

export class VersionIdParamDto extends createZodDto(VersionIdSchema) {}

export class VersionDiffQueryDto extends createZodDto(VersionDiffQuerySchema) {}
export type VersionDiffQuery = VersionDiffQueryType

export class VersionTypeQueryDto extends createZodDto(VersionTypeQuerySchema) {}
export type VersionTypeQuery = VersionTypeQueryType

export class VersionUpdateDto extends createZodDto(VersionUpdateSchema) {}
export type VersionUpdateInput = VersionUpdateInputType

export class UpdateVersionCptCodesDto extends createZodDto(UpdateVersionCptCodesSchema) {}
export type UpdateVersionCptCodesInput = UpdateVersionCptCodesInputType

export class UpdateVersionLoincCodesDto extends createZodDto(UpdateVersionLoincCodesSchema) {}
export type UpdateVersionLoincCodesInput = UpdateVersionLoincCodesInputType

export class UpdateVersionBiomarkersDto extends createZodDto(UpdateVersionBiomarkersSchema) {}
export type UpdateVersionBiomarkersInput = UpdateVersionBiomarkersInputType

export class UpdateVersionSpecimensDto extends createZodDto(UpdateVersionSpecimensSchema) {}
export type UpdateVersionSpecimensInput = UpdateVersionSpecimensInputType

export class TestAuditQueryDto extends createZodDto(TestAuditQuerySchema) {}
export type TestAuditQuery = TestAuditQueryType

export type AuditLog = AuditLogType
export type AuditLogList = AuditLogListType

export type TestSummary = TestSummaryType
export type TestListResponse = TestListResponseType
export type TestDetail = TestDetailType
export type TestVersionDetail = TestDetailType['version']

export class TestCatalogStatsDto extends createZodDto(TestCatalogStatsSchema) {}
export type TestCatalogStats = TestCatalogStatsType
