import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { CreateLoincDto, LoincCodeParamDto, LoincSearchQueryDto, UpdateLoincDto } from './loinc.dto'
import { LoincService } from './loinc.service'

@Auth()
@ApiTags('LOINC Codes')
@ApiController('loinc')
export class LoincController {
  constructor(private readonly loincService: LoincService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search LOINC codes' })
  @ApiOkResponseEnvelope({ description: 'List LOINC codes with pagination cursor' })
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
