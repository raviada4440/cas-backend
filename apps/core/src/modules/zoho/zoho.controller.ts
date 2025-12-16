import { Body, HttpCode, HttpException, HttpStatus, Post, Req } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { ZodValidationPipe } from '@core/common/pipes/zod-validation.pipe'

import { LeadPayload, LeadPayloadDto, LeadPayloadSchema } from './zoho.dto'
import { ZohoService } from './zoho.service'

const MIN_FORM_TIME = 3000 // Minimum 3 seconds to fill the form

@ApiTags('Zoho')
@ApiController('zoho')
export class ZohoController {
  constructor(private readonly zohoService: ZohoService) {}

  @Post('leads')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create a lead in Zoho CRM' })
  @ApiBody({ type: LeadPayloadDto })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        ok: { type: 'boolean' },
      },
    },
  })
  async createLead(
    @Req() req: FastifyRequest,
    @Body(new ZodValidationPipe(LeadPayloadSchema)) body: LeadPayload,
  ) {
    this.zohoService.validateEnvOrThrow()

    // Spam check 1: Honeypot field
    if (body.website && body.website.trim().length > 0) {
      return { ok: true }
    }

    // Spam check 2: Time-based validation
    if (typeof body.formLoadTime === 'number') {
      const timeToSubmit = Date.now() - body.formLoadTime
      if (timeToSubmit < MIN_FORM_TIME) {
        return { ok: true }
      }
    }

    // Spam check 3: Simple in-memory rate limit
    const clientIP = this.zohoService.getClientIP(req)
    const rateLimit = this.zohoService.checkRateLimit(clientIP)
    if (!rateLimit.allowed) {
      throw new HttpException(
        {
          message: rateLimit.message ?? 'Too many submissions. Please try again later.',
        },
        HttpStatus.TOO_MANY_REQUESTS,
      )
    }

    await this.zohoService.createZohoLead(body)
    return { ok: true }
  }
}
