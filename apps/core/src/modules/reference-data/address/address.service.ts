import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import {
  AddressAutocompleteDto,
  AddressAutocompleteResult,
  AddressPlaceDetailsDto,
  AddressPlaceDetailsResult,
  AddressValidationDto,
  AddressValidationResult,
} from './address.dto'

type AddressAutocompleteSuggestion = AddressAutocompleteResult['suggestions'][number]
type AddressValidationCandidate = AddressValidationResult['candidates'][number]

const GOOGLE_AUTOCOMPLETE_URL = 'https://places.googleapis.com/v1/places:autocomplete'
const GOOGLE_FIELD_MASK = [
  'suggestions.placePrediction.placeId',
  'suggestions.placePrediction.distanceMeters',
  'suggestions.placePrediction.text',
  'suggestions.placePrediction.structuredFormat',
].join(',')

const GOOGLE_PLACE_DETAILS_FIELDS = [
  'id',
  'formattedAddress',
  'shortFormattedAddress',
  'addressComponents',
]

const USPS_VERIFY_ENDPOINT = 'https://secure.shippingapis.com/ShippingAPI.dll'

const EMPTY_AUTOCOMPLETE: AddressAutocompleteResult = { suggestions: [] }
const EMPTY_PLACE_DETAILS: AddressPlaceDetailsResult = {
  address: {
    placeId: null,
    street: '',
    secondary: null,
    city: '',
    state: '',
    postalCode: null,
    postalCodeExtension: null,
    country: '',
    formattedAddress: '',
  },
}
const EMPTY_VALIDATION: AddressValidationResult = {
  candidates: [],
  message: 'Address validation provider not configured',
}

@Injectable()
export class AddressService {
  private readonly logger = new Logger(AddressService.name)
  private readonly provider: string

  constructor(private readonly configService: ConfigService) {
    this.provider = (configService.get<string>('ADDRESS_AUTOCOMPLETE_PROVIDER') ?? '').toLowerCase()
  }

  async autocomplete(input: AddressAutocompleteDto): Promise<AddressAutocompleteResult> {
    if (!this.isGoogleEnabled()) {
      this.logger.warn('Address autocomplete provider not configured, returning empty suggestions.')
      return EMPTY_AUTOCOMPLETE
    }

    try {
      const body: Record<string, unknown> = {
        input: input.input,
      }

      if (input.sessionToken) {
        body.sessionToken = input.sessionToken
      }
      if (input.languageCode) {
        body.languageCode = input.languageCode
      }
      if (input.regionCode) {
        body.regionCode = input.regionCode
      }
      if (input.locationBias) {
        body.locationBias = {
          circle: {
            center: {
              latitude: input.locationBias.latitude,
              longitude: input.locationBias.longitude,
            },
            radius: input.locationBias.radius,
          },
        }
      }

      const response = await fetch(GOOGLE_AUTOCOMPLETE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.getGoogleApiKey(),
          'X-Goog-FieldMask': GOOGLE_FIELD_MASK,
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        const message =
          payload?.error?.message ?? `Google Places autocomplete failed (${response.status})`
        this.logger.error(message)
        throw new ServiceUnavailableException('Failed to fetch place predictions')
      }

      const payload = (await response.json()) as Record<string, unknown>
      const suggestions = Array.isArray(payload?.suggestions)
        ? payload.suggestions
            .map((suggestion) => this.mapGoogleSuggestion(suggestion))
            .filter(
              (suggestion): suggestion is AddressAutocompleteSuggestion => suggestion !== null,
            )
            .slice(0, 5)
        : []

      return { suggestions }
    } catch (error) {
      this.logger.error('Places autocomplete error', error as Error)
      throw new ServiceUnavailableException('Failed to fetch place predictions')
    }
  }

  async resolvePlace(input: AddressPlaceDetailsDto): Promise<AddressPlaceDetailsResult> {
    if (!this.isGoogleEnabled()) {
      this.logger.warn(
        'Address place resolution provider not configured, returning placeholder address.',
      )
      return EMPTY_PLACE_DETAILS
    }

    try {
      const address = await this.fetchGooglePlaceDetails(input.placeId, {
        sessionToken: input.sessionToken,
        languageCode: input.languageCode,
      })
      return { address }
    } catch (error) {
      this.logger.error('Place details error', error as Error)
      throw new ServiceUnavailableException('Failed to fetch place details')
    }
  }

  async validate(input: AddressValidationDto): Promise<AddressValidationResult> {
    if (!this.isUspsEnabled()) {
      this.logger.warn('Address validation provider not configured, returning empty candidates.')
      return EMPTY_VALIDATION
    }

    try {
      const response = await this.callUspsValidation(input)
      return response
    } catch (error) {
      this.logger.error('USPS validation error', error as Error)
      throw new ServiceUnavailableException('Failed to validate address')
    }
  }

  private isGoogleEnabled(): boolean {
    if (this.provider && this.provider !== 'google') {
      return false
    }
    const apiKey = this.configService.get<string>('GOOGLE_PLACES_API_KEY')
    return Boolean(apiKey && apiKey.length > 0)
  }

  private getGoogleApiKey(): string {
    const apiKey = this.configService.get<string>('GOOGLE_PLACES_API_KEY')
    if (!apiKey) {
      throw new ServiceUnavailableException('GOOGLE_PLACES_API_KEY is not configured')
    }
    return apiKey
  }

  private isUspsEnabled(): boolean {
    const provider = this.configService.get<string>('ADDRESS_VALIDATION_PROVIDER')
    if (provider && provider.toLowerCase() !== 'usps') {
      return false
    }
    const userId = this.configService.get<string>('USPS_WEBTOOLS_USERID')
    return Boolean(userId && userId.trim().length > 0)
  }

  private getUspsUserId(): string {
    const userId = this.configService.get<string>('USPS_WEBTOOLS_USERID')
    if (!userId || !userId.trim()) {
      throw new ServiceUnavailableException('USPS_WEBTOOLS_USERID is not configured')
    }
    return userId.trim()
  }

  private mapGoogleSuggestion(input: unknown): AddressAutocompleteSuggestion | null {
    if (!input || typeof input !== 'object') {
      return null
    }

    const suggestion = input as Record<string, unknown>
    const prediction = suggestion.placePrediction
    if (!prediction || typeof prediction !== 'object') {
      return null
    }

    const record = prediction as Record<string, any>
    const placeId = record.placeId ?? record.place
    const text = record.text?.text
    if (typeof placeId !== 'string' || typeof text !== 'string') {
      return null
    }

    const primaryText =
      record.structuredFormat?.mainText?.text &&
      typeof record.structuredFormat.mainText.text === 'string'
        ? record.structuredFormat.mainText.text
        : text
    const secondaryText =
      record.structuredFormat?.secondaryText?.text &&
      typeof record.structuredFormat.secondaryText.text === 'string'
        ? record.structuredFormat.secondaryText.text
        : null

    return {
      placeId,
      primaryText,
      secondaryText,
      fullText: text ?? primaryText,
      distanceMeters: typeof record.distanceMeters === 'number' ? record.distanceMeters : null,
    }
  }

  private async fetchGooglePlaceDetails(
    placeId: string,
    params: { sessionToken?: string; languageCode?: string },
  ) {
    const normalized = placeId.startsWith('places/') ? placeId : `places/${placeId}`
    const url = new URL(`https://places.googleapis.com/v1/${normalized}`)
    if (params.sessionToken) {
      url.searchParams.set('sessionToken', params.sessionToken)
    }
    if (params.languageCode) {
      url.searchParams.set('languageCode', params.languageCode)
    }

    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': this.getGoogleApiKey(),
        'X-Goog-FieldMask': GOOGLE_PLACE_DETAILS_FIELDS.join(','),
      },
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}))
      const message = payload?.error?.message ?? `Google Place details failed (${response.status})`
      this.logger.error(message)
      throw new ServiceUnavailableException('Failed to fetch place details')
    }

    const json = (await response.json()) as Record<string, unknown>
    return this.normalizePlaceDetails(json)
  }

  private normalizePlaceDetails(googleResponse: Record<string, unknown>) {
    const components = Array.isArray(googleResponse?.addressComponents)
      ? (googleResponse.addressComponents as any[])
      : []

    const extractComponent = (type: string) =>
      components.find(
        (component) => Array.isArray(component?.types) && component.types.includes(type),
      )

    const streetNumber = extractComponent('street_number')?.longText ?? ''
    const route = extractComponent('route')?.longText ?? ''
    const subpremise =
      extractComponent('subpremise')?.shortText ?? extractComponent('floor')?.longText ?? null

    const locality =
      extractComponent('locality')?.longText ??
      extractComponent('postal_town')?.longText ??
      extractComponent('sublocality')?.longText ??
      ''

    const administrativeArea =
      extractComponent('administrative_area_level_1')?.shortText ??
      extractComponent('administrative_area_level_1')?.longText ??
      ''

    const postalCode = extractComponent('postal_code')?.longText ?? null
    const postalExtension = extractComponent('postal_code_suffix')?.longText ?? null
    const country = extractComponent('country')?.shortText ?? ''

    let streetValue =
      [streetNumber, route].filter(Boolean).join(' ').trim() || route || streetNumber

    let normalizedCity = locality
    let normalizedState = administrativeArea
    let normalizedPostal = postalCode
    let normalizedCountry = country

    const formattedAddress =
      (googleResponse?.formattedAddress as string | undefined) ??
      (googleResponse?.shortFormattedAddress as string | undefined) ??
      ''

    if (formattedAddress) {
      const segments = formattedAddress.split(',').map((segment) => segment.trim())
      if (!streetValue && segments.length > 0) {
        const [first] = segments
        if (first) {
          streetValue = first
        }
      }
      if (!normalizedCity && segments.length > 1) {
        normalizedCity = segments[1] ?? normalizedCity
      }
      if ((!normalizedState || !normalizedPostal) && segments.length > 2) {
        const stateZipParts = segments[2].split(/\s+/).filter(Boolean)
        if (!normalizedState && stateZipParts.length > 0) {
          normalizedState = stateZipParts[0]?.toUpperCase() ?? normalizedState
        }
        if (!normalizedPostal) {
          const zipCandidate = stateZipParts.slice(1).find((part) => /\d/.test(part))
          if (zipCandidate) {
            normalizedPostal = zipCandidate.replace(/[^0-9-]/g, '')
          }
        }
      }
      if (!normalizedCountry && segments.length > 0) {
        normalizedCountry = segments[segments.length - 1] ?? normalizedCountry
      }
    }

    return {
      placeId:
        (googleResponse?.id as string | undefined) ??
        (googleResponse?.name as string | undefined) ??
        null,
      street: streetValue,
      secondary: subpremise,
      city: normalizedCity ?? '',
      state: normalizedState ?? '',
      postalCode: normalizedPostal,
      postalCodeExtension: postalExtension,
      country: normalizedCountry ?? '',
      formattedAddress,
    }
  }

  private async callUspsValidation(input: AddressValidationDto): Promise<AddressValidationResult> {
    const userId = this.getUspsUserId()
    const xmlRequest =
      '<?xml version="1.0" encoding="UTF-8"?>' +
      `<AddressValidateRequest USERID="${this.escapeXml(userId)}">` +
      '<Revision>1</Revision>' +
      '<Address ID="0">' +
      `<Address1>${this.escapeXml(input.secondary ?? '')}</Address1>` +
      `<Address2>${this.escapeXml(input.street)}</Address2>` +
      `<City>${this.escapeXml(input.city ?? '')}</City>` +
      `<State>${this.escapeXml(input.state ?? '')}</State>` +
      `<Zip5>${this.escapeXml(input.zip5 ?? '')}</Zip5>` +
      '<Zip4></Zip4>' +
      '</Address>' +
      '</AddressValidateRequest>'

    const url = `${USPS_VERIFY_ENDPOINT}?API=Verify&XML=${encodeURIComponent(xmlRequest)}`
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/xml' },
    })

    const text = await response.text()

    const errorMatch = text.match(
      /<Error>[\s\S]*?<Description>([\s\S]*?)<\/Description>[\s\S]*?<\/Error>/i,
    )
    if (errorMatch) {
      const description = errorMatch[1]?.trim() || 'USPS validation error'
      return {
        candidates: [],
        message: description,
      }
    }

    const addressMatches = [...text.matchAll(/<Address(?:[^>]*)>([\s\S]*?)<\/Address>/gi)]
    const candidates = addressMatches
      .map((match) => this.mapUspsCandidate(match[1]))
      .filter((candidate): candidate is AddressValidationCandidate => candidate !== null)

    const messageMatch = text.match(/<ReturnText>([\s\S]*?)<\/ReturnText>/i)
    const message = messageMatch ? messageMatch[1]?.trim() ?? null : null

    return { candidates, message }
  }

  private mapUspsCandidate(block: string): AddressValidationCandidate | null {
    if (!block) {
      return null
    }
    const street = this.extractXmlTag(block, 'Address2') ?? ''
    const secondary = this.extractXmlTag(block, 'Address1')
    const city = this.extractXmlTag(block, 'City')
    const state = this.extractXmlTag(block, 'State')
    const zip5 = this.extractXmlTag(block, 'Zip5')
    const zip4 = this.extractXmlTag(block, 'Zip4')
    const dpvConfirmation = this.extractXmlTag(block, 'DPVConfirmation')
    const dpvFootnotes = this.parseUspsFootnotes(this.extractXmlTag(block, 'DPVFootnotes'))
    const footnotes = this.parseUspsFootnotes(this.extractXmlTag(block, 'Footnotes'))
    const carrierRoute = this.extractXmlTag(block, 'CarrierRoute')
    const { formatted, normalized } = this.formatUspsCandidate({
      street,
      secondary,
      city,
      state,
      zip5,
      zip4,
    })

    return {
      street,
      secondary: secondary ?? null,
      city: city ?? null,
      state: state ?? null,
      zip5: zip5 ?? null,
      zip4: zip4 ?? null,
      dpvConfirmation: dpvConfirmation ?? null,
      dpvFootnotes,
      footnotes,
      carrierRoute: carrierRoute ?? null,
      formatted,
      normalized,
    }
  }

  private extractXmlTag(block: string, tag: string): string | null {
    const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i'))
    if (!match) {
      const selfClosing = block.match(new RegExp(`<${tag}\\s*/\\s*>`, 'i'))
      return selfClosing ? '' : null
    }
    return match[1].trim()
  }

  private parseUspsFootnotes(value?: string | null): string[] {
    if (!value) {
      return []
    }
    const normalized = value.replace(/[^A-Z]/gi, '').toUpperCase()
    if (!normalized) {
      return []
    }
    return normalized.match(/[A-Z]{1,2}/g) ?? []
  }

  private formatUspsCandidate(candidate: {
    street: string
    secondary: string | null
    city: string | null
    state: string | null
    zip5: string | null
    zip4: string | null
  }): { formatted: string; normalized: string } {
    const streetLine = [candidate.street, candidate.secondary].filter(Boolean).join(' ').trim()
    const locality = [candidate.city, candidate.state].filter(Boolean).join(', ')
    const zip = [candidate.zip5, candidate.zip4 ? `${candidate.zip4}` : null]
      .filter(Boolean)
      .join('-')

    const formatted = [streetLine, locality, zip].filter(Boolean).join(', ')
    const normalized = formatted ? `${formatted}, United States` : 'United States'
    return { formatted, normalized }
  }

  private escapeXml(value: string | null | undefined): string {
    if (!value) {
      return ''
    }
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }
}
