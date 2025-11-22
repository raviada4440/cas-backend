import { Injectable, Logger } from '@nestjs/common'

import { PhoneValidationDto, PhoneValidationResult } from './phone.dto'

const DEFAULT_RESPONSE: PhoneValidationResult = {
  result: {
    normalized: '',
    nationalFormat: null,
    countryCode: null,
    lineType: null,
    carrierName: null,
    status: 'unknown',
    risk: null,
    message: 'Phone validation provider not configured',
  },
}

@Injectable()
export class PhoneService {
  private readonly logger = new Logger(PhoneService.name)

  async validate(_: PhoneValidationDto): Promise<PhoneValidationResult> {
    this.logger.warn('Phone validation provider not yet configured, returning default response.')
    return DEFAULT_RESPONSE
  }
}
