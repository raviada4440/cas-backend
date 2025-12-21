import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import {
  CreatePatientDto,
  PatientDetailDto,
  PatientIdParamDto,
  PatientSearchQueryDto,
  PatientSearchResponseDto,
  UpdatePatientDto,
} from './patients.dto'
import { PatientsService } from './patients.service'

@Auth()
@ApiTags('Orders - Patients')
@ApiController('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search patients' })
  @ApiOkResponseEnvelope(PatientSearchResponseDto)
  list(@Query() query: PatientSearchQueryDto) {
    return this.patientsService.search(query)
  }

  @Get('/:patientId')
  @ApiOperation({ summary: 'Get patient detail' })
  @ApiOkResponseEnvelope(PatientDetailDto)
  detail(@Param() params: PatientIdParamDto) {
    return this.patientsService.detail(params.patientId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create patient' })
  @ApiOkResponseEnvelope(PatientDetailDto)
  create(@Body() body: CreatePatientDto) {
    return this.patientsService.create(body)
  }

  @Put('/:patientId')
  @ApiOperation({ summary: 'Update patient' })
  @ApiOkResponseEnvelope(PatientDetailDto)
  update(@Param() params: PatientIdParamDto, @Body() body: UpdatePatientDto) {
    return this.patientsService.update(params.patientId, body)
  }

  @Delete('/:patientId')
  @ApiOperation({ summary: 'Delete patient' })
  @ApiOkResponseEnvelope({ description: 'Deletion success flag' })
  remove(@Param() params: PatientIdParamDto) {
    return this.patientsService.delete(params.patientId)
  }
}
