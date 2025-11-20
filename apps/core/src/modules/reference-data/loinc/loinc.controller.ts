import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { CreateLoincDto, LoincCodeParamDto, LoincSearchQueryDto, UpdateLoincDto } from './loinc.dto'
import { LoincService } from './loinc.service'

@ApiTags('LOINC Codes')
@ApiController('loinc')
export class LoincController {
  constructor(private readonly loincService: LoincService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search LOINC codes' })
  @ApiOkResponse({ description: 'List LOINC codes with pagination cursor' })
  search(@Query() query: LoincSearchQueryDto) {
    return this.loincService.search(query)
  }

  @Get('/:loincNum')
  @ApiOperation({ summary: 'Get LOINC code detail' })
  get(@Param() params: LoincCodeParamDto) {
    return this.loincService.get(params.loincNum)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create LOINC code' })
  create(@Body() body: CreateLoincDto) {
    return this.loincService.create(body)
  }

  @Put('/:loincNum')
  @ApiOperation({ summary: 'Update LOINC code' })
  update(@Param() params: LoincCodeParamDto, @Body() body: UpdateLoincDto) {
    return this.loincService.update(params.loincNum, body)
  }

  @Delete('/:loincNum')
  @ApiOperation({ summary: 'Delete LOINC code' })
  remove(@Param() params: LoincCodeParamDto) {
    return this.loincService.delete(params.loincNum)
  }
}

