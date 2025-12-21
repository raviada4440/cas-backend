import { Body, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ApiOkResponseEnvelope } from '@core/common/decorators/response-envelope.decorator'

import { AttachmentIdParamDto, AttachmentResponseDto, CreateAttachmentDto } from './files.dto'
import { FilesService } from './files.service'

@ApiTags('Files')
@ApiController('files')
@Auth()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @ApiOperation({ summary: 'Create an attachment metadata record' })
  @ApiOkResponseEnvelope(AttachmentResponseDto)
  public createAttachment(@Body() body: CreateAttachmentDto) {
    return this.filesService.createAttachment(body)
  }

  @Get(':attachmentId')
  @ApiOperation({ summary: 'Fetch attachment metadata by id' })
  @ApiOkResponseEnvelope(AttachmentResponseDto)
  public getAttachment(@Param() params: AttachmentIdParamDto) {
    return this.filesService.getAttachmentById(params.attachmentId)
  }
}
