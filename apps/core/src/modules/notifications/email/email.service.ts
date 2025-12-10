import {
  Injectable,
  Logger,
  ServiceUnavailableException,
  InternalServerErrorException,
} from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'
import { ConfigService } from '@nestjs/config'
import sgMail, { MailDataRequired } from '@sendgrid/mail'

import { EMAIL_PREVIEWS, EmailPreview } from './email.data'
import { SendEmailDto } from './email.dto'

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name)
  private readonly defaultTemplateId: string | undefined
  private readonly apiKey: string | undefined

  constructor(
    private readonly configService: ConfigService,
    private readonly i18n: I18nService,
  ) {
    this.apiKey = this.configService.get<string>('SENDGRID_API_KEY') ?? undefined
    this.defaultTemplateId =
      this.configService.get<string>('SENDGRID_TEMPLATE_ID') ?? 'd-de9a247e70604c929cc6ecad171d493e'

    if (this.apiKey) {
      sgMail.setApiKey(this.apiKey)
    } else {
      this.logger.warn('SENDGRID_API_KEY is not set; email sending is disabled')
    }
  }

  public getEmailPreviews(): EmailPreview[] {
    return EMAIL_PREVIEWS
  }

  public async sendEmail(dto: SendEmailDto): Promise<EmailPreview> {
    if (!this.apiKey) {
      throw new ServiceUnavailableException(await this.translate('email_service_not_configured'))
    }

    const templateId = dto.templateId ?? this.defaultTemplateId
    if (!templateId) {
      throw new ServiceUnavailableException(await this.translate('email_template_not_configured'))
    }

    const message: MailDataRequired = {
      to: dto.to,
      from: dto.from,
      templateId,
      dynamicTemplateData: dto.dynamicContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: true,
        },
        openTracking: {
          enable: true,
        },
      },
    }

    const previewPayload: EmailPreview = {
      id: this.generatePreviewId(),
      name: dto.dynamicContent['action-title'] ?? dto.dynamicContent.subject ?? dto.from,
      subject: dto.dynamicContent.subject,
      text: dto.dynamicContent['action-content'] ?? dto.dynamicContent['pico-response'] ?? '',
      starred: false,
      isRead: false,
      date: new Date().toISOString(),
      category: 'primary',
      label: 'work',
    }

    try {
      await sgMail.send(message)
      this.logger.log(`Email sent via SendGrid template ${templateId} to ${dto.to.join(', ')}`)
      EMAIL_PREVIEWS.unshift(previewPayload)
      return previewPayload
    } catch (error) {
      const err = error as Error
      this.logger.error(`Failed to send email via SendGrid: ${err.message}`, err.stack)
      throw new InternalServerErrorException(await this.translate('email_send_failed'))
    }
  }

  private generatePreviewId(): number {
    const highest = EMAIL_PREVIEWS.reduce((max, email) => (email.id > max ? email.id : max), 0)
    return highest + 1
  }

  private translate(key: string, args?: Record<string, unknown>) {
    const lang = I18nContext.current()?.lang
    return this.i18n.translate<string>(`errors.${key}`, { lang, args })
  }
}
