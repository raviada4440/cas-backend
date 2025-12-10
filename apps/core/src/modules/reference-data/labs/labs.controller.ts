import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { CreateLabDto, LabIdParamDto, LabSearchQueryDto, UpdateLabDto } from './labs.dto'
import { LabsService } from './labs.service'

@Auth()
@ApiTags('Labs')
@ApiController('labs')
export class LabsController {
  constructor(private readonly labsService: LabsService) {}

  @Get('/')
  @ApiOperation({ summary: 'Search labs' })
  @ApiOkResponse({ description: 'List labs with pagination cursor' })
  search(@Query() query: LabSearchQueryDto) {
    return this.labsService.search(query)
  }

  @Get('/:labId')
  @ApiOperation({ summary: 'Get lab by id' })
  @ApiOkResponse({ description: 'Lab detail' })
  get(@Param() params: LabIdParamDto) {
    return this.labsService.get(params.labId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create lab' })
  create(@Body() body: CreateLabDto) {
    return this.labsService.create(body)
  }

  @Put('/:labId')
  @ApiOperation({ summary: 'Update lab' })
  update(@Param() params: LabIdParamDto, @Body() body: UpdateLabDto) {
    return this.labsService.update(params.labId, body)
  }

  @Delete('/:labId')
  @ApiOperation({ summary: 'Delete lab' })
  remove(@Param() params: LabIdParamDto) {
    return this.labsService.delete(params.labId)
  }
}
