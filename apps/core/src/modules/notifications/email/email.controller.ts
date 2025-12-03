import { Body, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'

import { EmailService } from './email.service'
import { SendEmailDto } from './email.dto'

@ApiTags('Email')
@ApiController('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  @ApiOperation({ summary: 'List mock email previews for the inbox UI' })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        message: { type: 'string' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              subject: { type: 'string' },
              text: { type: 'string' },
              starred: { type: 'boolean' },
              isRead: { type: 'boolean' },
              date: { type: 'string', format: 'date-time' },
              category: { type: 'string' },
              label: { type: 'string' },
            },
          },
        },
      },
    },
  })
  public listEmailPreviews() {
    const emails = this.emailService.getEmailPreviews()
    return {
      status: 'success',
      message: 'Fetched email previews',
      data: emails,
    }
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send an email via SendGrid dynamic template' })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            subject: { type: 'string' },
            text: { type: 'string' },
            starred: { type: 'boolean' },
            isRead: { type: 'boolean' },
            date: { type: 'string', format: 'date-time' },
            category: { type: 'string' },
            label: { type: 'string' },
          },
        },
      },
    },
  })
  public async sendEmail(@Body() payload: SendEmailDto) {
    const preview = await this.emailService.sendEmail(payload)
    return {
      status: 'success',
      message: 'Email sent successfully',
      data: preview,
    }
  }
}
