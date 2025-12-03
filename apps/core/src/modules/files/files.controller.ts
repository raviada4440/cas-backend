import { Body, Get, Param, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'

import { AttachmentIdParamDto, AttachmentResponseDto, CreateAttachmentDto } from './files.dto'
import { FilesService } from './files.service'

@ApiTags('Files')
@ApiController('files')
@Auth()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @ApiOperation({ summary: 'Create an attachment metadata record' })
  @ApiOkResponse({ type: AttachmentResponseDto })
  public createAttachment(@Body() body: CreateAttachmentDto) {
    return this.filesService.createAttachment(body)
  }

  @Get(':attachmentId')
  @ApiOperation({ summary: 'Fetch attachment metadata by id' })
  @ApiOkResponse({ type: AttachmentResponseDto })
  public getAttachment(@Param() params: AttachmentIdParamDto) {
    return this.filesService.getAttachmentById(params.attachmentId)
  }
}
