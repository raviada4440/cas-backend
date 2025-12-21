import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { CreateIcdDto, IcdIdParamDto, IcdSearchQueryDto, UpdateIcdDto } from './icd.dto'
import { IcdService } from './icd.service'

@Auth()
@ApiTags('ICD Codes')
@ApiController('icd-codes')
export class IcdController {
  constructor(private readonly icdService: IcdService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search ICD codes' })
  @ApiOkResponseEnvelope({ description: 'List ICD codes with pagination cursor' })
  search(@Query() query: IcdSearchQueryDto) {
    return this.icdService.search(query)
  }

  @Get('/:icdId')
  @ApiOperation({ summary: 'Get ICD code detail' })
  get(@Param() params: IcdIdParamDto) {
    return this.icdService.get(params.icdId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create ICD code' })
  create(@Body() body: CreateIcdDto) {
    return this.icdService.create(body)
  }

  @Put('/:icdId')
  @ApiOperation({ summary: 'Update ICD code' })
  update(@Param() params: IcdIdParamDto, @Body() body: UpdateIcdDto) {
    return this.icdService.update(params.icdId, body)
  }

  @Delete('/:icdId')
  @ApiOperation({ summary: 'Delete ICD code' })
  remove(@Param() params: IcdIdParamDto) {
    return this.icdService.delete(params.icdId)
  }
}
