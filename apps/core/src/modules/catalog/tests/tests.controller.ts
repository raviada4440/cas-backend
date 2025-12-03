import { Body, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import {
  CloneVersionDto,
  CreateDraftVersionDto,
  CreateTestDto,
  ListTestsQueryDto,
  LabTestLookupResponseDto,
  PublishVersionDto,
  RetireVersionDto,
  SetDefaultVersionDto,
  TestIdParamDto,
  TestSearchQueryDto,
  TestVersionQueryDto,
  UpdateTestDto,
  VersionDiffQueryDto,
  VersionIdParamDto,
  VersionUpdateDto,
  VersionTypeQueryDto,
  UpdateVersionCptCodesDto,
  UpdateVersionLoincCodesDto,
  UpdateVersionBiomarkersDto,
  UpdateVersionSpecimensDto,
} from './tests.dto'
import { TestsService } from './tests.service'

@ApiTags('Catalog - Tests')
@ApiController('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/search')
  @ApiOperation({ summary: 'Search tests for a lab' })
  @ApiOkResponse({ type: LabTestLookupResponseDto })
  search(@Query() query: TestSearchQueryDto) {
    return this.testsService.search(query)
  }

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

  @Get('/:testId/versions')
  @ApiOperation({ summary: 'List versions for a test' })
  listVersions(@Param() params: TestIdParamDto) {
    return this.testsService.listVersions(params.testId)
  }

  @Post('/:testId/versions/draft')
  @ApiOperation({ summary: 'Create draft version' })
  createDraft(@Param() params: TestIdParamDto, @Body() body: CreateDraftVersionDto) {
    return this.testsService.createDraftVersion(params.testId, body)
  }

  @Post('/:testId/versions/:versionId/clone')
  @ApiOperation({ summary: 'Clone version' })
  cloneVersion(@Param() params: TestIdParamDto & VersionIdParamDto, @Body() body: CloneVersionDto) {
    return this.testsService.cloneVersion(params.testId, params.versionId, body)
  }

  @Put('/:testId/default-version')
  @ApiOperation({ summary: 'Set default version for test' })
  setDefault(@Param() params: TestIdParamDto, @Body() body: SetDefaultVersionDto) {
    return this.testsService.setDefaultVersion(params.testId, body)
  }

  @Put('/:testId/versions/:versionId/publish')
  @ApiOperation({ summary: 'Publish version' })
  publishVersion(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: PublishVersionDto,
  ) {
    return this.testsService.publishVersion(params.testId, params.versionId, body)
  }

  @Put('/:testId/versions/:versionId/retire')
  @ApiOperation({ summary: 'Retire version' })
  retireVersion(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: RetireVersionDto,
  ) {
    return this.testsService.retireVersion(params.testId, params.versionId, body)
  }

  @Put('/versions/:versionId')
  @ApiOperation({ summary: 'Update version attributes' })
  updateVersion(@Param() params: VersionIdParamDto, @Body() body: VersionUpdateDto) {
    return this.testsService.updateVersion(params.versionId, body)
  }

  @Get('/:testId/versions/:versionId/diff')
  @ApiOperation({ summary: 'Diff versions' })
  getVersionDiff(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Query() query: VersionDiffQueryDto,
  ) {
    return this.testsService.getVersionDiff(params.testId, params.versionId, query.compareVersionId)
  }

  @Get('/:testId/activity')
  @ApiOperation({ summary: 'Get test activity' })
  activity(@Param() params: TestIdParamDto) {
    return this.testsService.getActivity(params.testId)
  }

  @Get('/:testId/versions/:versionId/cpt-codes')
  @ApiOperation({ summary: 'Get version CPT codes' })
  getVersionCptCodes(@Param() params: TestIdParamDto & VersionIdParamDto) {
    return this.testsService.getVersionCptCodes(params.testId, params.versionId)
  }

  @Put('/:testId/versions/:versionId/cpt-codes')
  @ApiOperation({ summary: 'Update version CPT codes' })
  updateVersionCptCodes(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: UpdateVersionCptCodesDto,
  ) {
    return this.testsService.updateVersionCptCodes(params.testId, params.versionId, body)
  }

  @Get('/:testId/versions/:versionId/loinc-codes')
  @ApiOperation({ summary: 'Get version LOINC codes' })
  getVersionLoincCodes(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Query() query: VersionTypeQueryDto,
  ) {
    const type = query.type ?? 'ORDER'
    return this.testsService.getVersionLoincCodes(params.testId, params.versionId, type)
  }

  @Put('/:testId/versions/:versionId/loinc-codes')
  @ApiOperation({ summary: 'Update version LOINC codes' })
  updateVersionLoincCodes(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: UpdateVersionLoincCodesDto,
  ) {
    return this.testsService.updateVersionLoincCodes(params.testId, params.versionId, body)
  }

  @Get('/:testId/versions/:versionId/biomarkers')
  @ApiOperation({ summary: 'Get version biomarkers' })
  getVersionBiomarkers(@Param() params: TestIdParamDto & VersionIdParamDto) {
    return this.testsService.getVersionBiomarkers(params.testId, params.versionId)
  }

  @Put('/:testId/versions/:versionId/biomarkers')
  @ApiOperation({ summary: 'Update version biomarkers' })
  updateVersionBiomarkers(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: UpdateVersionBiomarkersDto,
  ) {
    return this.testsService.updateVersionBiomarkers(params.testId, params.versionId, body)
  }

  @Get('/:testId/versions/:versionId/specimens')
  @ApiOperation({ summary: 'Get version specimens' })
  getVersionSpecimens(@Param() params: TestIdParamDto & VersionIdParamDto) {
    return this.testsService.getVersionSpecimens(params.testId, params.versionId)
  }

  @Put('/:testId/versions/:versionId/specimens')
  @ApiOperation({ summary: 'Update version specimens' })
  updateVersionSpecimens(
    @Param() params: TestIdParamDto & VersionIdParamDto,
    @Body() body: UpdateVersionSpecimensDto,
  ) {
    return this.testsService.updateVersionSpecimens(params.testId, params.versionId, body)
  }
}
