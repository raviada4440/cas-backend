import { ApiOperation, ApiTags } from '@nestjs/swagger'
import {
  BadRequestException,
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'
import { AuthenticatedRequest } from '@core/transformers/get-req.transformer'

import {
  CreateLabOrderRequestDto,
  LabOrderIdParamDto,
  LabOrderSearchQueryDto,
  UpdateLabOrderDto,
  UpdateLabOrderStatusDto,
  CreateLabOrderInput,
  CreateLabOrderRequest,
  UpdateLabOrderInput,
} from './lab-orders.dto'
import { LabOrdersService } from './lab-orders.service'
import { normalizeLabOrderDraft } from './lab-order.normalizer'
import { validateLabOrder } from './lab-order.validation'
import {
  FamilyStructureType,
  VariantDimensionType,
  FamilyStructure,
  VariantDimension,
} from '@shared/contracts/catalog'

const FAMILY_STRUCTURE_VALUES = FamilyStructure.options as FamilyStructureType[]

@Auth()
@ApiTags('Orders - Lab Orders')
@ApiController('laborders')
export class LabOrdersController {
  private readonly logger = new Logger(LabOrdersController.name)

  constructor(private readonly labOrdersService: LabOrdersService) {}

  @Get('/')
  @ApiOperation({ summary: 'List lab orders' })
  list(@Query() query: LabOrderSearchQueryDto, @Req() request: AuthenticatedRequest) {
    return this.labOrdersService.list(query, this.getScope(request))
  }

  @Get('/:labOrderId')
  @ApiOperation({ summary: 'Get lab order detail' })
  detail(@Param() params: LabOrderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.labOrdersService.detail(params.labOrderId, this.getScope(request))
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a lab order' })
  create(@Body() body: CreateLabOrderRequestDto, @Req() request: AuthenticatedRequest) {
    const statusNormalized = (body.status ?? 'DRAFT').toString().toUpperCase()
    const isDraft = statusNormalized === 'DRAFT'
    // High-visibility log to confirm draft detection
    const logLine = `[LabOrdersController] create: status=${
      body.status ?? 'undefined'
    } normalized=${statusNormalized} isDraft=${isDraft}`
    this.logger.warn(logLine)
    console.log(logLine)
    if (!isDraft) {
      this.ensureValidLabOrderDraft(statusNormalized, body.labOrder)
    }
    const createRequest = body as CreateLabOrderRequest

    const normalized = normalizeLabOrderDraft(createRequest.labOrder)

    const testId = isDraft
      ? this.normalizeIdentifier(createRequest.testId)
      : this.requireIdentifier(createRequest.testId, 'testId')
    const patientId = isDraft
      ? this.normalizeIdentifier(createRequest.patientId)
      : this.requireIdentifier(createRequest.patientId, 'patientId')

    // For drafts, skip variant resolution entirely; for non-draft enforce it
    let dimension: VariantDimensionType | null = null
    let variantValue: string | null = null
    if (!isDraft) {
      const resolved = this.resolveVariantDimension(createRequest)
      dimension = resolved.dimension
      variantValue = resolved.value
    }

    const orderDateObject =
      normalized.orderDate ??
      (createRequest.orderDate ? new Date(createRequest.orderDate) : null) ??
      new Date()
    if (Number.isNaN(orderDateObject.getTime())) {
      throw new BadRequestException('Invalid orderDate')
    }

    const orderingProviderId = this.normalizeIdentifier(
      createRequest.orderingProviderId ?? normalized.orderingProvider.id ?? undefined,
    )
    const treatingProviderId = this.normalizeIdentifier(createRequest.treatingProviderId)
    const organizationId = this.normalizeIdentifier(
      createRequest.organizationId ?? normalized.facility.organizationId ?? undefined,
    )
    const versionId = this.normalizeIdentifier(createRequest.versionId)
    const derivedLabId = this.normalizeIdentifier(normalized.derivedLabId ?? undefined)

    const specimensArray = normalized.specimens
      .filter((specimen) => Boolean(specimen.specimenType))
      .map((specimen) => ({
        specimenType: specimen.specimenType as string,
        collectedDate: specimen.drawDate ? specimen.drawDate.toISOString() : undefined,
        specimenCount: specimen.specimenCount ?? undefined,
        bodySite: specimen.bodySite ?? undefined,
      }))
    const specimens = specimensArray.length > 0 ? specimensArray : undefined

    const familyStructure =
      dimension === 'FAMILY_STRUCTURE'
        ? this.normalizeFamilyStructure(variantValue)
        : this.normalizeFamilyStructure(createRequest.familyStructure)

    const createInput: CreateLabOrderInput = {
      status: statusNormalized as CreateLabOrderInput['status'],
      patientId: patientId ?? undefined,
      testId: testId ?? undefined,
      familyStructure,
      orderDate: orderDateObject.toISOString(),
      versionId,
      orderingProviderId,
      treatingProviderId,
      organizationId,
      orderNotes: normalized.snapshot,
      testIds: testId ? this.buildTestIds(testId, normalized.resolvedTestIds) : undefined,
      icdIds: normalized.resolvedIcdIds?.length ? normalized.resolvedIcdIds : undefined,
      specimens,
    }

    return this.labOrdersService.create(createInput, this.getScope(request), {
      variantDimension: dimension ?? undefined,
      variantValue: variantValue ?? undefined,
      orderDate: orderDateObject,
      versionId,
      derivedLabId: derivedLabId ?? null,
    })
  }

  @Put('/:labOrderId')
  @ApiOperation({ summary: 'Update a lab order' })
  update(
    @Param() params: LabOrderIdParamDto,
    @Body() body: UpdateLabOrderDto,
    @Req() request: AuthenticatedRequest,
  ) {
    let normalized: ReturnType<typeof normalizeLabOrderDraft> | null = null
    if (body.labOrder) {
      normalized = normalizeLabOrderDraft(body.labOrder)
    }

    const orderNotes = body.orderNotes ?? normalized?.snapshot
    const testIds = body.testIds ?? normalized?.resolvedTestIds
    const icdIds = body.icdIds ?? normalized?.resolvedIcdIds

    let specimens = body.specimens
    if (specimens === undefined && normalized) {
      specimens = normalized.specimens
        .filter((specimen) => Boolean(specimen.specimenType))
        .map((specimen) => ({
          id: specimen.id ?? undefined,
          specimenType: specimen.specimenType as string,
          collectedDate: specimen.drawDate ? specimen.drawDate.toISOString() : undefined,
          specimenCount: specimen.specimenCount ?? undefined,
          bodySite: specimen.bodySite ?? undefined,
        }))
    }

    const updateInput: UpdateLabOrderInput = {}
    if (orderNotes !== undefined) {
      updateInput.orderNotes = orderNotes
    }
    if (testIds !== undefined) {
      updateInput.testIds = testIds
    }
    if (icdIds !== undefined) {
      updateInput.icdIds = icdIds
    }
    if (specimens !== undefined) {
      updateInput.specimens = specimens
    }
    return this.labOrdersService.update(params.labOrderId, updateInput, this.getScope(request))
  }

  @Patch('/:labOrderId/status')
  @ApiOperation({ summary: 'Append a lab order status entry' })
  updateStatus(
    @Param() params: LabOrderIdParamDto,
    @Body() body: UpdateLabOrderStatusDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.labOrdersService.updateStatus(
      params.labOrderId,
      body.status,
      this.getScope(request),
    )
  }

  @Delete('/:labOrderId')
  @ApiOperation({ summary: 'Delete a lab order' })
  @ApiOkResponseEnvelope({ description: 'Deletion success flag' })
  delete(@Param() params: LabOrderIdParamDto, @Req() request: AuthenticatedRequest) {
    return this.labOrdersService.delete(params.labOrderId, this.getScope(request))
  }

  private ensureValidLabOrderDraft(
    status: string | undefined,
    raw: CreateLabOrderRequest['labOrder'],
  ) {
    const normalizedStatus = (status ?? 'DRAFT').toString().toUpperCase()
    const logLine = `[LabOrdersController] ensureValidLabOrderDraft invoked: status=${
      status ?? 'undefined'
    } normalized=${normalizedStatus}`
    this.logger.warn(logLine)
    console.log(logLine)
    if (normalizedStatus === 'DRAFT') {
      this.logger.warn('[LabOrdersController] skipping draft validation')
      console.log('[LabOrdersController] skipping draft validation')
      return
    }
    this.logger.warn('[LabOrdersController] running validateLabOrder for non-draft')
    console.log('[LabOrdersController] running validateLabOrder for non-draft')
    const validation = validateLabOrder(raw)
    if (!validation.ok) {
      throw new UnprocessableEntityException({
        message: 'Invalid lab order payload',
        issues: validation.issues,
      })
    }
  }

  private getScope(request: AuthenticatedRequest) {
    return {
      tenantIds: request.tenantIds ?? [],
      isSuperAdmin: request.isSuperAdmin ?? false,
    }
  }

  private normalizeFamilyStructure(input?: string | null): FamilyStructureType {
    if (!input) {
      return 'PROBAND'
    }
    const candidate = input.trim().toUpperCase()
    return FAMILY_STRUCTURE_VALUES.includes(candidate as FamilyStructureType)
      ? (candidate as FamilyStructureType)
      : 'PROBAND'
  }

  private normalizeIdentifier(value?: string | null): string | undefined {
    const trimmed = value?.trim()
    return trimmed && trimmed.length > 0 ? trimmed : undefined
  }

  private requireIdentifier(value: string | undefined, field: string): string {
    const normalized = this.normalizeIdentifier(value)
    if (!normalized) {
      throw new BadRequestException(`${field} is required`)
    }
    return normalized
  }

  private buildTestIds(primary: string, additional: string[]): string[] {
    const values = new Set<string>()
    if (primary) {
      values.add(primary)
    }
    additional.forEach((id) => {
      const normalized = id?.trim()
      if (normalized) {
        values.add(normalized)
      }
    })
    return Array.from(values)
  }

  private resolveVariantDimension(body: CreateLabOrderRequest): {
    dimension: VariantDimensionType
    value: string
  } {
    const dimensionInput =
      typeof body.dimension === 'string' ? body.dimension.trim().toUpperCase() : null
    let dimension: VariantDimensionType | null = null

    if (dimensionInput) {
      const parsed = VariantDimension.safeParse(dimensionInput)
      if (!parsed.success) {
        throw new BadRequestException('dimension is invalid')
      }
      dimension = parsed.data
    }

    let rawValue = typeof body.dimensionValue === 'string' ? body.dimensionValue.trim() : undefined

    if (!dimension) {
      if (typeof body.familyStructure === 'string' && body.familyStructure.trim()) {
        dimension = 'FAMILY_STRUCTURE'
        rawValue = body.familyStructure.trim()
      }
    }

    if (!dimension) {
      throw new BadRequestException('dimension is required')
    }

    if (!rawValue || rawValue.trim().length === 0) {
      throw new BadRequestException('dimensionValue is required')
    }

    return {
      dimension,
      value: rawValue.trim().toUpperCase(),
    }
  }
}
