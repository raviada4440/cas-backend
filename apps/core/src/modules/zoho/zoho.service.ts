import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common'
import { FastifyRequest } from 'fastify'

import { HttpService } from '@core/processors/helper/helper.http.service'

import { LeadPayload } from './zoho.dto'

const REQUIRED_ENV_VARS = ['ZOHO_CLIENT_ID', 'ZOHO_CLIENT_SECRET', 'ZOHO_REFRESH_TOKEN'] as const
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 5 // Max submissions per window per IP

export interface RateLimitResult {
  allowed: boolean
  message?: string
}

@Injectable()
export class ZohoService {
  private readonly logger = new Logger(ZohoService.name)
  private readonly tokenUrl: string
  private readonly leadUrl: string
  private readonly rateLimitMap = new Map<string, { count: number; resetAt: number }>()

  constructor(private readonly http: HttpService) {
    const dc = process.env.ZOHO_DC ?? 'com'
    this.tokenUrl = `https://accounts.zoho.${dc}/oauth/v2/token`
    this.leadUrl = `https://www.zohoapis.${dc}/crm/v3/Leads`
  }

  validateEnvOrThrow() {
    const missing = REQUIRED_ENV_VARS.filter(
      (envName) => !process.env[envName] || process.env[envName]?.length === 0,
    )

    if (missing.length > 0) {
      throw new InternalServerErrorException(
        `Missing Zoho CRM environment variables: ${missing.join(', ')}`,
      )
    }
  }

  getClientIP(req: FastifyRequest): string {
    const forwarded = req.headers?.['x-forwarded-for']
    if (typeof forwarded === 'string' && forwarded.trim().length > 0) {
      return forwarded.split(',')[0]?.trim()
    }
    if (Array.isArray(forwarded) && forwarded.length > 0) {
      return forwarded[0]?.split(',')[0]?.trim() || 'unknown'
    }

    const realIp = req.headers?.['x-real-ip']
    if (typeof realIp === 'string' && realIp.trim().length > 0) {
      return realIp.trim()
    }

    const socketIp =
      (req.socket as any)?.remoteAddress ||
      (req.raw as any)?.socket?.remoteAddress ||
      (req.raw as any)?.connection?.remoteAddress

    return socketIp || 'unknown'
  }

  checkRateLimit(ip: string): RateLimitResult {
    const now = Date.now()
    const record = this.rateLimitMap.get(ip)

    if (!record || now > record.resetAt) {
      this.rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
      return { allowed: true }
    }

    if (record.count >= RATE_LIMIT_MAX) {
      return {
        allowed: false,
        message: 'Too many submissions. Please try again later.',
      }
    }

    record.count += 1
    return { allowed: true }
  }

  private splitName(fullName: string): { firstName: string; lastName: string } {
    const trimmed = fullName.trim()
    if (!trimmed) {
      return { firstName: '', lastName: '' }
    }

    const parts = trimmed.split(/\s+/)
    if (parts.length === 1) {
      return { firstName: parts[0], lastName: parts[0] }
    }

    const firstName = parts.shift() ?? ''
    const lastName = parts.join(' ') || ''
    return { firstName, lastName }
  }

  async fetchAccessToken(): Promise<string> {
    try {
      const response = await this.http.axiosRef.post(
        this.tokenUrl,
        new URLSearchParams({
          refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
          client_id: process.env.ZOHO_CLIENT_ID!,
          client_secret: process.env.ZOHO_CLIENT_SECRET!,
          grant_type: 'refresh_token',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      const accessToken = response.data?.access_token
      if (!accessToken) {
        throw new Error('Zoho token response missing access_token')
      }
      return accessToken
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error)
      this.logger.error(`Unable to refresh Zoho access token: ${reason}`)
      throw new InternalServerErrorException('Unable to refresh Zoho access token')
    }
  }

  async createZohoLead(lead: LeadPayload): Promise<void> {
    const accessToken = await this.fetchAccessToken()

    const { firstName, lastName } = this.splitName(lead.name)
    const company =
      typeof lead.organization === 'string' && lead.organization.trim().length > 0
        ? lead.organization.trim()
        : 'Not Provided'
    const phone =
      typeof lead.phone === 'string' && lead.phone.trim().length > 0 ? lead.phone.trim() : undefined

    const payload = {
      data: [
        {
          First_Name: firstName || undefined,
          Last_Name: lastName || firstName || undefined,
          Company: company,
          Email: lead.email,
          Phone: phone,
          Lead_Source: lead.leadSource?.trim() || 'Website Demo Request',
          Description: lead.message?.trim() || undefined,
        },
      ],
      trigger: ['workflow'],
    }

    try {
      await this.http.axiosRef.post(this.leadUrl, payload, {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error)
      this.logger.error(`Failed to create Zoho lead: ${reason}`)
      throw new InternalServerErrorException('Failed to create Zoho lead')
    }
  }
}
