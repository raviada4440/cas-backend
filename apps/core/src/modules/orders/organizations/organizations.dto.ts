import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  FacilityCreateInput,
  FacilityDirectoryQuery,
  OrganizationAncestryResponse,
  OrganizationCreateInput,
  OrganizationDirectoryQuery,
  OrganizationFavoriteCreateInput,
  OrganizationFavoriteTestListResponse,
  OrganizationResultListResponse,
  OrganizationUpdateInput,
} from '@shared/contracts/organization'
import { ProviderSummary } from '@shared/contracts/providers'
import { OrganizationEndpointDirectoryQuery } from '@shared/contracts/organization-endpoint'
import { UserListResponse } from '@shared/contracts/users'

const uuid = () => z.string().uuid()

export class OrganizationDirectoryQueryDto extends createZodDto(OrganizationDirectoryQuery) {}
export type OrganizationDirectoryQueryInput = z.infer<typeof OrganizationDirectoryQuery>

export class FacilityDirectoryQueryDto extends createZodDto(FacilityDirectoryQuery) {}
export type FacilityDirectoryQueryInput = z.infer<typeof FacilityDirectoryQuery>

export const FacilityIdParamSchema = z
  .object({
    facilityId: uuid(),
  })
  .strict()
export class FacilityIdParamDto extends createZodDto(FacilityIdParamSchema) {}
export type FacilityIdParam = z.infer<typeof FacilityIdParamSchema>

export const OrganizationIdParamSchema = z
  .object({
    organizationId: uuid(),
  })
  .strict()
export class OrganizationIdParamDto extends createZodDto(OrganizationIdParamSchema) {}
export type OrganizationIdParam = z.infer<typeof OrganizationIdParamSchema>

export class OrganizationCreateDto extends createZodDto(OrganizationCreateInput) {}
export type OrganizationCreateInputDto = z.infer<typeof OrganizationCreateInput>

export class FacilityCreateDto extends createZodDto(FacilityCreateInput) {}
export type FacilityCreateInputDto = z.infer<typeof FacilityCreateInput>

export class OrganizationUpdateDto extends createZodDto(OrganizationUpdateInput) {}
export type OrganizationUpdateInputDto = z.infer<typeof OrganizationUpdateInput>

export class OrganizationFavoriteCreateDto extends createZodDto(OrganizationFavoriteCreateInput) {}
export type OrganizationFavoriteCreateInputDto = z.infer<typeof OrganizationFavoriteCreateInput>

export class OrganizationFavoriteTestListResponseDto extends createZodDto(
  OrganizationFavoriteTestListResponse,
) {}
export type OrganizationFavoriteTestListResponseType = z.infer<
  typeof OrganizationFavoriteTestListResponse
>

export class OrganizationResultListResponseDto extends createZodDto(
  OrganizationResultListResponse,
) {}
export type OrganizationResultListResponseType = z.infer<typeof OrganizationResultListResponse>

export class OrganizationAncestryResponseDto extends createZodDto(OrganizationAncestryResponse) {}
export type OrganizationAncestryResponseType = z.infer<typeof OrganizationAncestryResponse>

export const ProviderAssociationSchema = z
  .object({
    providerId: uuid(),
  })
  .strict()
export class ProviderAssociationDto extends createZodDto(ProviderAssociationSchema) {}
export type ProviderAssociationInput = z.infer<typeof ProviderAssociationSchema>

export class ProviderSummaryDto extends createZodDto(ProviderSummary) {}
export type ProviderSummaryType = z.infer<typeof ProviderSummary>

export class UserListResponseDto extends createZodDto(UserListResponse) {}
export type UserListResponseType = z.infer<typeof UserListResponse>

export class OrganizationEndpointDirectoryQueryDto extends createZodDto(
  OrganizationEndpointDirectoryQuery,
) {}
export type OrganizationEndpointDirectoryQueryInput = z.infer<
  typeof OrganizationEndpointDirectoryQuery
>

export const OrganizationEndpointIdParamSchema = z
  .object({
    endpointId: uuid(),
  })
  .strict()
export class OrganizationEndpointIdParamDto extends createZodDto(
  OrganizationEndpointIdParamSchema,
) {}
export type OrganizationEndpointIdParam = z.infer<typeof OrganizationEndpointIdParamSchema>
