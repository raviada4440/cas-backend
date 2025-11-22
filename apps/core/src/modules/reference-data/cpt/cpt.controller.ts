import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { CptCodeParamDto, CptSearchQueryDto, CreateCptDto, UpdateCptDto } from './cpt.dto'
import { CptService } from './cpt.service'

@ApiTags('CPT Codes')
@ApiController('cpt-codes')
export class CptController {
  constructor(private readonly cptService: CptService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search CPT codes' })
  @ApiOkResponse({ description: 'List CPT codes with pagination cursor' })
  search(@Query() query: CptSearchQueryDto) {
    return this.cptService.search(query)
  }

  @Get('/:code')
  @ApiOperation({ summary: 'Get CPT code detail' })
  get(@Param() params: CptCodeParamDto) {
    return this.cptService.get(params.code)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create CPT code' })
  create(@Body() body: CreateCptDto) {
    return this.cptService.create(body)
  }

  @Put('/:code')
  @ApiOperation({ summary: 'Update CPT code' })
  update(@Param() params: CptCodeParamDto, @Body() body: UpdateCptDto) {
    return this.cptService.update(params.code, body)
  }

  @Delete('/:code')
  @ApiOperation({ summary: 'Delete CPT code' })
  remove(@Param() params: CptCodeParamDto) {
    return this.cptService.delete(params.code)
  }
}
