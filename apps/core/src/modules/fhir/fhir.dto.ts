import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  FhirBundleResponse,
  FhirLocationRequest,
  FhirOrganizationRequest,
  FhirPatientRequest,
  FhirPractitionerRequest,
  FhirPractitionerRoleRequest,
  FhirResourceRequest,
  FhirPatientSearchInput,
  FhirPatientSearchResponse,
  FhirPatientDetailInput,
  FhirPatientDetailResponse,
} from '@shared/contracts/fhir'

export class FhirPractitionerRequestDto extends createZodDto(FhirPractitionerRequest) {}
export class FhirPractitionerRoleRequestDto extends createZodDto(FhirPractitionerRoleRequest) {}
export class FhirLocationRequestDto extends createZodDto(FhirLocationRequest) {}
export class FhirOrganizationRequestDto extends createZodDto(FhirOrganizationRequest) {}
export class FhirPatientRequestDto extends createZodDto(FhirPatientRequest) {}
export class FhirResourceRequestDto extends createZodDto(FhirResourceRequest) {}

export class FhirPatientSearchRequestDto extends createZodDto(FhirPatientSearchInput) {}
export class FhirPatientSearchResponseDto extends createZodDto(FhirPatientSearchResponse) {}

export class FhirPatientDetailRequestDto extends createZodDto(FhirPatientDetailInput) {}
export class FhirPatientDetailResponseDto extends createZodDto(FhirPatientDetailResponse) {}

export const FhirPatientIdParamSchema = z
  .object({
    patientId: z.string().min(1),
  })
  .strict()

export class FhirPatientIdParamDto extends createZodDto(FhirPatientIdParamSchema) {}

export type FhirBundleResponseType = FhirBundleResponse
