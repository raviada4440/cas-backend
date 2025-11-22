import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  CreatePatientDto,
  PatientDetailDto,
  PatientIdParamDto,
  PatientSearchQueryDto,
  PatientSearchResponseDto,
  UpdatePatientDto,
} from './patients.dto'
import { PatientsService } from './patients.service'

@ApiTags('Orders - Patients')
@ApiController('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search patients' })
  @ApiOkResponse({ type: PatientSearchResponseDto })
  list(@Query() query: PatientSearchQueryDto) {
    return this.patientsService.search(query)
  }

  @Get('/:patientId')
  @ApiOperation({ summary: 'Get patient detail' })
  @ApiOkResponse({ type: PatientDetailDto })
  detail(@Param() params: PatientIdParamDto) {
    return this.patientsService.detail(params.patientId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create patient' })
  @ApiOkResponse({ type: PatientDetailDto })
  create(@Body() body: CreatePatientDto) {
    return this.patientsService.create(body)
  }

  @Put('/:patientId')
  @ApiOperation({ summary: 'Update patient' })
  @ApiOkResponse({ type: PatientDetailDto })
  update(@Param() params: PatientIdParamDto, @Body() body: UpdatePatientDto) {
    return this.patientsService.update(params.patientId, body)
  }

  @Delete('/:patientId')
  @ApiOperation({ summary: 'Delete patient' })
  @ApiOkResponse({ description: 'Deletion success flag' })
  remove(@Param() params: PatientIdParamDto) {
    return this.patientsService.delete(params.patientId)
  }
}
