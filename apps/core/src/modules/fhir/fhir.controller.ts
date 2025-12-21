import { Body, Param, Post, Req, UnauthorizedException } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'
import { AuthenticatedRequest } from '@core/transformers/get-req.transformer'

import {
  FhirLocationRequestDto,
  FhirOrganizationRequestDto,
  FhirPatientRequestDto,
  FhirPractitionerRequestDto,
  FhirPractitionerRoleRequestDto,
  FhirResourceRequestDto,
  FhirPatientSearchRequestDto,
  FhirPatientSearchResponseDto,
  FhirPatientDetailRequestDto,
  FhirPatientDetailResponseDto,
  FhirPatientIdParamDto,
} from './fhir.dto'
import { FhirService } from './fhir.service'

@Auth()
@ApiTags('FHIR')
@ApiController('fhir')
export class FhirController {
  constructor(private readonly fhirService: FhirService) {}

  @Post('practitioner')
  @ApiOperation({ summary: 'Fetch practitioner resource' })
  @ApiBody({ type: FhirPractitionerRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR Practitioner resource', type: Object })
  getPractitioner(@Body() body: FhirPractitionerRequestDto) {
    return this.fhirService.getPractitioner(body)
  }

  @Post('practitioner-role')
  @ApiOperation({ summary: 'Fetch practitioner role' })
  @ApiBody({ type: FhirPractitionerRoleRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR PractitionerRole resource', type: Object })
  getPractitionerRole(@Body() body: FhirPractitionerRoleRequestDto) {
    return this.fhirService.getPractitionerRole(body)
  }

  @Post('practitioner-role/include')
  @ApiOperation({ summary: 'Fetch practitioner role bundle with includes' })
  @ApiBody({ type: FhirPractitionerRoleRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR Bundle response', type: Object })
  getPractitionerRoleWithIncludes(@Body() body: FhirPractitionerRoleRequestDto) {
    return this.fhirService.getPractitionerRoleWithIncludes(body)
  }

  @Post('location')
  @ApiOperation({ summary: 'Fetch location resource' })
  @ApiBody({ type: FhirLocationRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR Location resource', type: Object })
  getLocation(@Body() body: FhirLocationRequestDto) {
    return this.fhirService.getLocation(body)
  }

  @Post('organization')
  @ApiOperation({ summary: 'Fetch organization resource' })
  @ApiBody({ type: FhirOrganizationRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR Organization resource', type: Object })
  getOrganization(@Body() body: FhirOrganizationRequestDto) {
    return this.fhirService.getOrganization(body)
  }

  @Post('patient')
  @ApiOperation({ summary: 'Fetch patient resource' })
  @ApiBody({ type: FhirPatientRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR Patient resource', type: Object })
  getPatient(@Body() body: FhirPatientRequestDto) {
    return this.fhirService.getPatient(body)
  }

  @Post('resource')
  @ApiOperation({ summary: 'Fetch generic FHIR resource' })
  @ApiBody({ type: FhirResourceRequestDto })
  @ApiOkResponseEnvelope({ description: 'FHIR resource', type: Object })
  getResource(@Body() body: FhirResourceRequestDto) {
    return this.fhirService.getResource(body)
  }

  @Post('patients/search')
  @ApiOperation({ summary: 'Search FHIR patients' })
  @ApiBody({ type: FhirPatientSearchRequestDto })
  @ApiOkResponseEnvelope(FhirPatientSearchResponseDto)
  searchPatients(@Req() request: AuthenticatedRequest, @Body() body: FhirPatientSearchRequestDto) {
    const userId = request.owner?.id
    if (!userId) {
      throw new UnauthorizedException('Unable to resolve authenticated user')
    }
    return this.fhirService.searchPatients(userId, body)
  }

  @Post('patients/:patientId')
  @ApiOperation({ summary: 'Fetch FHIR patient detail' })
  @ApiBody({ type: FhirPatientDetailRequestDto })
  @ApiOkResponseEnvelope(FhirPatientDetailResponseDto)
  getPatientDetail(
    @Req() request: AuthenticatedRequest,
    @Param() params: FhirPatientIdParamDto,
    @Body() body: FhirPatientDetailRequestDto,
  ) {
    const userId = request.owner?.id
    if (!userId) {
      throw new UnauthorizedException('Unable to resolve authenticated user')
    }
    return this.fhirService.getPatientDetail(userId, params.patientId, body)
  }
}
