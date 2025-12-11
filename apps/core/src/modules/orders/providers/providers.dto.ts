import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CreateProviderInput,
  ProviderBulkUpdateInput,
  ProviderBulkUpdateResult,
  ProviderDetail,
  ProviderEducationCreateInput,
  ProviderEducationListResponse,
  ProviderEducationRecord,
  ProviderFavoriteCreateInput,
  ProviderFavoriteTestListResponse,
  ProviderFavoriteTestRecord,
  ProviderIdParam,
  ProviderOrganizationLinkInput,
  ProviderOrganizationListResponse,
  ProviderOrganizationRecord,
  ProviderOrderListResponse,
  ProviderOrderRecord,
  ProviderSearchParams,
  ProviderSearchResponse,
  ProviderStatsResponse,
  ProviderUpsertInput,
  ProviderUserAccountResponse,
  ProviderByNpiParam,
  UpdateProviderInput,
} from '@shared/contracts/providers'

export class ProviderSearchQueryDto extends createZodDto(ProviderSearchParams) {}
export type ProviderSearchQuery = z.infer<typeof ProviderSearchParams>

export class ProviderSearchResponseDto extends createZodDto(ProviderSearchResponse) {}
export type ProviderSearchResponseType = z.infer<typeof ProviderSearchResponse>

export class ProviderIdParamDto extends createZodDto(ProviderIdParam) {}
export type ProviderIdParamInput = z.infer<typeof ProviderIdParam>

export class CreateProviderDto extends createZodDto(CreateProviderInput) {}
export type CreateProviderDtoInput = z.infer<typeof CreateProviderInput>

export class UpdateProviderDto extends createZodDto(UpdateProviderInput) {}
export type UpdateProviderDtoInput = z.infer<typeof UpdateProviderInput>

export class ProviderUpsertDto extends createZodDto(ProviderUpsertInput) {}
export type ProviderUpsertDtoInput = z.infer<typeof ProviderUpsertInput>

export class ProviderDetailDto extends createZodDto(ProviderDetail) {}
export type ProviderDetailType = z.infer<typeof ProviderDetail>

export class ProviderEducationListResponseDto extends createZodDto(ProviderEducationListResponse) {}
export type ProviderEducationListResponseType = z.infer<typeof ProviderEducationListResponse>

export class ProviderEducationRecordDto extends createZodDto(ProviderEducationRecord) {}
export type ProviderEducationRecordType = z.infer<typeof ProviderEducationRecord>

export class ProviderFavoriteCreateDto extends createZodDto(ProviderFavoriteCreateInput) {}
export type ProviderFavoriteCreateInputDto = z.infer<typeof ProviderFavoriteCreateInput>

export class ProviderFavoriteTestListResponseDto extends createZodDto(
  ProviderFavoriteTestListResponse,
) {}
export type ProviderFavoriteTestListResponseType = z.infer<typeof ProviderFavoriteTestListResponse>

export class ProviderFavoriteTestRecordDto extends createZodDto(ProviderFavoriteTestRecord) {}
export type ProviderFavoriteTestRecordType = z.infer<typeof ProviderFavoriteTestRecord>

export class ProviderOrderListResponseDto extends createZodDto(ProviderOrderListResponse) {}
export type ProviderOrderListResponseType = z.infer<typeof ProviderOrderListResponse>

export class ProviderOrderRecordDto extends createZodDto(ProviderOrderRecord) {}
export type ProviderOrderRecordType = z.infer<typeof ProviderOrderRecord>

export const ProviderOrganizationQuerySchema = z
  .object({
    limit: z.coerce.number().int().min(1).max(100).default(20).optional(),
  })
  .strict()
export class ProviderOrganizationQueryDto extends createZodDto(ProviderOrganizationQuerySchema) {}
export type ProviderOrganizationQuery = z.infer<typeof ProviderOrganizationQuerySchema>

export class ProviderOrganizationRecordDto extends createZodDto(ProviderOrganizationRecord) {}
export type ProviderOrganizationRecordType = z.infer<typeof ProviderOrganizationRecord>

export class ProviderOrganizationListResponseDto extends createZodDto(
  ProviderOrganizationListResponse,
) {}
export type ProviderOrganizationListResponseType = z.infer<typeof ProviderOrganizationListResponse>

export class ProviderOrganizationLinkDto extends createZodDto(ProviderOrganizationLinkInput) {}
export type ProviderOrganizationLinkInputType = z.infer<typeof ProviderOrganizationLinkInput>

export const ProviderUserAccountInputSchema = z
  .object({
    email: z.string().email().optional(),
    autoVerify: z.boolean().optional(),
  })
  .strict()
export class ProviderUserAccountInputDto extends createZodDto(ProviderUserAccountInputSchema) {}
export type ProviderUserAccountInput = z.infer<typeof ProviderUserAccountInputSchema>

export class ProviderUserAccountResponseDto extends createZodDto(ProviderUserAccountResponse) {}
export type ProviderUserAccountResponseType = z.infer<typeof ProviderUserAccountResponse>

export class ProviderStatsResponseDto extends createZodDto(ProviderStatsResponse) {}
export type ProviderStatsResponseType = z.infer<typeof ProviderStatsResponse>

export class ProviderBulkUpdateDto extends createZodDto(ProviderBulkUpdateInput) {}
export type ProviderBulkUpdateInputType = z.infer<typeof ProviderBulkUpdateInput>

export class ProviderBulkUpdateResultDto extends createZodDto(ProviderBulkUpdateResult) {}
export type ProviderBulkUpdateResultType = z.infer<typeof ProviderBulkUpdateResult>

export class ProviderEducationCreateDto extends createZodDto(ProviderEducationCreateInput) {}
export type ProviderEducationCreateInputType = z.infer<typeof ProviderEducationCreateInput>

export class ProviderByNpiParamDto extends createZodDto(ProviderByNpiParam) {}
export type ProviderByNpiParamInput = z.infer<typeof ProviderByNpiParam>
