import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  CreatePatientInput,
  PatientDetail,
  PatientIdParam,
  PatientSearchParams,
  PatientSearchResponse,
  PatientSummary,
  UpdatePatientInput,
} from '@shared/contracts/patients'

export class PatientSearchQueryDto extends createZodDto(PatientSearchParams) {}
export type PatientSearchQuery = z.infer<typeof PatientSearchParams>

export class PatientSearchResponseDto extends createZodDto(PatientSearchResponse) {}
export type PatientSearchResponseType = z.infer<typeof PatientSearchResponse>

export class PatientSummaryDto extends createZodDto(PatientSummary) {}
export type PatientSummaryType = z.infer<typeof PatientSummary>

export class PatientIdParamDto extends createZodDto(PatientIdParam) {}
export type PatientIdParamInput = z.infer<typeof PatientIdParam>

export class CreatePatientDto extends createZodDto(CreatePatientInput) {}
export type CreatePatientDtoInput = z.infer<typeof CreatePatientInput>

export class UpdatePatientDto extends createZodDto(UpdatePatientInput) {}
export type UpdatePatientDtoInput = z.infer<typeof UpdatePatientInput>

export class PatientDetailDto extends createZodDto(PatientDetail) {}
export type PatientDetailType = z.infer<typeof PatientDetail>
