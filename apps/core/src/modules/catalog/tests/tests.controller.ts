import { Body, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  CreateTestDto,
  ListTestsQueryDto,
  TestIdParamDto,
  TestVersionQueryDto,
  UpdateTestDto,
} from './tests.dto'
import { TestsService } from './tests.service'

@ApiTags('Catalog - Tests')
@ApiController('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/')
  @ApiOperation({ summary: 'List catalog tests' })
  @ApiOkResponse({ description: 'Paged test summaries' })
  list(@Query() query: ListTestsQueryDto) {
    return this.testsService.list(query)
  }

  @Get('/:testId')
  @ApiOperation({ summary: 'Get test detail' })
  get(@Param() params: TestIdParamDto, @Query() query: TestVersionQueryDto) {
    return this.testsService.get(params.testId, query.versionId)
  }

  @Post('/')
  @ApiOperation({ summary: 'Create new test' })
  create(@Body() body: CreateTestDto) {
    return this.testsService.create(body)
  }

  @Put('/:testId')
  @ApiOperation({ summary: 'Update test information' })
  update(@Param() params: TestIdParamDto, @Body() body: UpdateTestDto) {
    return this.testsService.update(params.testId, body)
  }
}

