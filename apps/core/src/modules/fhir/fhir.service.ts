import { Injectable, HttpException, HttpStatus, ForbiddenException, Logger } from '@nestjs/common'
import type { Bundle, Patient } from 'fhir/r4'

import {
  FhirBundleResponse,
  FhirLocationRequest,
  FhirOrganizationRequest,
  FhirPatientRequest,
  FhirPractitionerRequest,
  FhirPractitionerRoleRequest,
  FhirResourceRequest,
  FhirPatientSearchInput,
  FhirPatientSearchResponse,
  FhirPatientDetailInput,
  FhirPatientDetailResponse,
  FhirProvider,
} from '@shared/contracts/fhir'

import { FhirCredentialsService } from './fhir-credentials.service'
import {
  isOperationOutcome,
  mapPatientDetailResponse,
  mapPatientSearchResponse,
} from './fhir.mapper'

@Injectable()
export class FhirService {
  private readonly logger = new Logger(FhirService.name)

  constructor(private readonly credentialsService: FhirCredentialsService) {}

  async getPractitioner(input: FhirPractitionerRequest) {
    const url = this.resolveUrl(input.fhirEndpoint, input.fhirUser)
    return this.fetchJson(url, input.accessToken)
  }

  async getPractitionerRole(input: FhirPractitionerRoleRequest) {
    const url = this.resolveUrl(
      input.fhirEndpoint,
      `PractitionerRole?practitioner=${encodeURIComponent(input.providerAccountId)}`,
    )
    const bundle = (await this.fetchJson(url, input.accessToken)) as FhirBundleResponse
    const entry = Array.isArray((bundle as any)?.entry) ? (bundle as any).entry[0] : undefined
    return entry?.resource ?? {}
  }

  async getPractitionerRoleWithIncludes(input: FhirPractitionerRoleRequest) {
    const url = this.resolveUrl(
      input.fhirEndpoint,
      [
        `PractitionerRole?practitioner=${encodeURIComponent(input.providerAccountId)}`,
        '_include=PractitionerRole:practitioner',
        '_include=PractitionerRole:location',
        '_include=PractitionerRole:organization',
      ].join('&'),
    )
    return this.fetchJson(url, input.accessToken)
  }

  async getLocation(input: FhirLocationRequest) {
    const url = this.resolveUrl(input.fhirEndpoint, input.fhirLocation)
    return this.fetchJson(url, input.accessToken)
  }

  async getOrganization(input: FhirOrganizationRequest) {
    const url = this.resolveUrl(input.fhirEndpoint, input.fhirOrganization)
    return this.fetchJson(url, input.accessToken)
  }

  async getPatient(input: FhirPatientRequest) {
    const url = this.resolveUrl(input.fhirEndpoint, input.fhirPatient)
    return this.fetchJson(url, input.accessToken)
  }

  async getResource(input: FhirResourceRequest) {
    const path = `${input.resourceType.replace(/^\//, '')}/${encodeURIComponent(input.resourceId)}`
    const url = this.resolveUrl(input.fhirEndpoint, path)
    return this.fetchJson(url, input.accessToken)
  }

  async searchPatients(userId: string, input: FhirPatientSearchInput): Promise<FhirPatientSearchResponse> {
    const { provider, credentials } = await this.resolveCredentials(userId, input.provider)

    const url = input.cursor
      ? this.validateCursor(input.cursor, credentials.fhirEndpoint)
      : this.buildSearchUrl(credentials.fhirEndpoint, input.search, input.limit)

    this.logger.log('FHIR patient search request', {
      provider,
      userId,
      search: input.search,
      limit: input.limit,
      url: url.toString(),
    })

    const response = await this.performFhirGet(url, credentials.accessToken)

    if (!response.ok) {
      await this.throwFhirError(response)
    }

    const payload: unknown = await response.json()

    if (isOperationOutcome(payload)) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_GATEWAY,
          message: 'FHIR OperationOutcome returned',
          details: payload.issue,
        },
        HttpStatus.BAD_GATEWAY,
      )
    }

    const bundle = payload as Bundle
    return mapPatientSearchResponse(
      bundle,
      credentials.fhirEndpoint,
      credentials.warning,
      input.cursor ?? null,
    )
  }

  async getPatientDetail(
    userId: string,
    patientId: string,
    input: FhirPatientDetailInput,
  ): Promise<FhirPatientDetailResponse> {
    const { provider, credentials } = await this.resolveCredentials(userId, input.provider)

    const patientPath = patientId.includes('/') ? patientId : `Patient/${patientId}`
    const url = this.resolveUrl(credentials.fhirEndpoint, patientPath)

    this.logger.log('FHIR patient detail request', {
      provider,
      userId,
      patientId,
      url: url.toString(),
    })

    const response = await this.performFhirGet(url, credentials.accessToken)

    if (response.status === HttpStatus.NOT_FOUND) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'FHIR patient not found',
        },
        HttpStatus.NOT_FOUND,
      )
    }

    if (!response.ok) {
      await this.throwFhirError(response)
    }

    const payload: unknown = await response.json()

    if (isOperationOutcome(payload)) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_GATEWAY,
          message: 'FHIR OperationOutcome returned',
          details: payload.issue,
        },
        HttpStatus.BAD_GATEWAY,
      )
    }

    return mapPatientDetailResponse(payload as Patient, credentials.warning ?? null, {
      endpoint: credentials.fhirEndpoint,
    })
  }

  private resolveUrl(base: string, target: string): URL {
    try {
      return new URL(target)
    } catch {
      const normalizedBase = base.endsWith('/') ? base : `${base}/`
      const normalizedTarget = target.startsWith('/') ? target.slice(1) : target
      return new URL(normalizedTarget, normalizedBase)
    }
  }

  private async fetchJson(url: URL, accessToken: string) {
    const response = await this.performFhirGet(url, accessToken)
    if (!response.ok) {
      await this.throwFhirError(response)
    }

    return response.json()
  }

  private async performFhirGet(url: URL, accessToken: string) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/fhir+json, application/json',
      },
    })

    return response
  }

  private async throwFhirError(response: Response): Promise<never> {
    let payload: unknown = null
    try {
      payload = await response.json()
    } catch {
      try {
        payload = await response.text()
      } catch {
        payload = null
      }
    }

    throw new HttpException(
      {
        statusCode: response.status,
        message: 'FHIR API error',
        details: payload,
      },
      (response.status as HttpStatus) ?? HttpStatus.BAD_GATEWAY,
    )
  }

  private async resolveCredentials(userId: string, preferred?: FhirProvider) {
    const provider = await this.credentialsService.resolveProvider(userId, preferred)
    if (!provider) {
      throw new ForbiddenException('No connected EHR provider for this user')
    }
    const credentials = await this.credentialsService.getCredentials(userId, provider)
    return { provider, credentials }
  }

  private buildSearchUrl(base: string, search: string, limit: number): URL {
    const tokens = search
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean)

    if (/^\d{6}$/.test(search)) {
      const url = new URL('Patient', base)
      url.searchParams.set('identifier', `MRN|${search}`)
      url.searchParams.set('_count', String(limit))
      url.searchParams.set('_total', 'accurate')
      return url
    }

    const url = new URL('Patient', base)
    url.searchParams.set('_count', String(limit))
    url.searchParams.set('_total', 'accurate')
    url.searchParams.set('birthdate', 'ge1940-01-01')
    url.searchParams.append('birthdate', 'le2025-12-31')

    if (tokens.length >= 2) {
      url.searchParams.set('given', tokens.slice(0, -1).join(' '))
      url.searchParams.set('family', tokens[tokens.length - 1])
    } else if (tokens.length === 1) {
      url.searchParams.set('given', tokens[0])
    }

    return url
  }

  private validateCursor(cursor: string, base: string): URL {
    const cursorUrl = new URL(cursor)
    if (!cursorUrl.href.startsWith(base)) {
      throw new Error('Cursor does not belong to the authorized FHIR endpoint')
    }
    return cursorUrl
  }
}

