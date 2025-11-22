import { Injectable, Logger } from '@nestjs/common'
import {
  AddressAutocompleteDto,
  AddressAutocompleteResult,
  AddressPlaceDetailsDto,
  AddressPlaceDetailsResult,
  AddressValidationDto,
  AddressValidationResult,
} from './address.dto'

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

  async autocomplete(_: AddressAutocompleteDto): Promise<AddressAutocompleteResult> {
    this.logger.warn(
      'Address autocomplete provider not yet configured, returning empty suggestions.',
    )
    return EMPTY_AUTOCOMPLETE
  }

  async resolvePlace(_: AddressPlaceDetailsDto): Promise<AddressPlaceDetailsResult> {
    this.logger.warn(
      'Address place resolution provider not yet configured, returning placeholder address.',
    )
    return EMPTY_PLACE_DETAILS
  }

  async validate(_: AddressValidationDto): Promise<AddressValidationResult> {
    this.logger.warn('Address validation provider not yet configured, returning empty candidates.')
    return EMPTY_VALIDATION
  }
}
