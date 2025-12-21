import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import {
  BiomarkerIdParamDto,
  BiomarkerSearchQueryDto,
  CreateBiomarkerDto,
  UpdateBiomarkerDto,
} from './biomarkers.dto'
import { BiomarkersService } from './biomarkers.service'

@Auth()
@ApiTags('Biomarkers')
@ApiController('biomarkers')
export class BiomarkersController {
  constructor(private readonly biomarkersService: BiomarkersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search biomarkers' })
  @ApiOkResponseEnvelope({ description: 'List biomarkers with pagination cursor' })
  search(@Query() query: BiomarkerSearchQueryDto) {
    return this.biomarkersService.search(query)
  }

  @Get('/:hgncId')
  @ApiOperation({ summary: 'Get biomarker by HGNC id' })
  @ApiOkResponseEnvelope({ description: 'Biomarker detail' })
  get(@Param() params: BiomarkerIdParamDto) {
    return this.biomarkersService.get(params.hgncId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create biomarker' })
  create(@Body() body: CreateBiomarkerDto) {
    return this.biomarkersService.create(body)
  }

  @Put('/:hgncId')
  @ApiOperation({ summary: 'Update biomarker' })
  update(@Param() params: BiomarkerIdParamDto, @Body() body: UpdateBiomarkerDto) {
    return this.biomarkersService.update(params.hgncId, body)
  }

  @Delete('/:hgncId')
  @ApiOperation({ summary: 'Delete biomarker' })
  remove(@Param() params: BiomarkerIdParamDto) {
    return this.biomarkersService.delete(params.hgncId)
  }
}
