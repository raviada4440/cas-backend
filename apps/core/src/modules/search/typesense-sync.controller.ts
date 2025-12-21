import { Body, Get, Post, Req } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'
import { ZodValidationPipe } from '@core/common/pipes/zod-validation.pipe'

import {
  TypesenseHealthResponseDto,
  TypesenseSyncRequestDto,
  TypesenseSyncResponseDto,
} from './typesense-sync.dto'
import { TypesenseSyncService } from './typesense-sync.service'
import { TypesenseSyncRequestSchema } from '@shared/contracts/search'

type RequestWithOwner = FastifyRequest & {
  owner?: {
    id?: string
  }
}

@ApiTags('Search')
@ApiController('search/typesense-sync')
@Auth()
export class TypesenseSyncController {
  constructor(private readonly syncService: TypesenseSyncService) {}

  @Post()
  @ApiOperation({ summary: 'Synchronize catalog data with Typesense' })
  @ApiOkResponseEnvelope(TypesenseSyncResponseDto)
  public async sync(
    @Req() request: RequestWithOwner,
    @Body(new ZodValidationPipe(TypesenseSyncRequestSchema)) body: TypesenseSyncRequestDto,
  ) {
    const actorId = request.owner?.id ?? null
    return this.syncService.sync(body, actorId)
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve Typesense health status' })
  @ApiOkResponseEnvelope(TypesenseHealthResponseDto)
  public async health() {
    return this.syncService.health()
  }
}
