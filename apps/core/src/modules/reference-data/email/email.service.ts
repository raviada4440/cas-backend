import { Injectable, Logger } from '@nestjs/common'

import { EmailValidationDto, EmailValidationResult } from './email.dto'

const DEFAULT_RESPONSE: EmailValidationResult = {
  result: {
    email: '',
    normalized: null,
    result: 'unknown',
    reason: null,
    disposable: null,
    roleAccount: null,
    freeEmail: null,
    acceptAll: null,
    suggestedCorrection: null,
    message: 'Email validation provider not configured',
  },
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name)

  async validate(_: EmailValidationDto): Promise<EmailValidationResult> {
    this.logger.warn('Email validation provider not yet configured, returning default response.')
    return DEFAULT_RESPONSE
  }
}
