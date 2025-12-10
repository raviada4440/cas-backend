import { Injectable, NotFoundException } from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'

import { Attachment } from '@db/client'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  AttachmentCreateInput,
  AttachmentCreateRequest,
  AttachmentResponse,
  AttachmentResponseSchema,
} from '@shared/contracts/attachments'

@Injectable()
export class FilesService {
  constructor(
    private readonly database: DatabaseService,
    private readonly i18n: I18nService,
  ) {}

  public async createAttachment(input: AttachmentCreateRequest): Promise<AttachmentResponse> {
    const payload = AttachmentCreateInput.parse(input)
    const created = await this.database.prisma.attachment.create({
      data: payload,
    })

    return this.mapAttachment(created)
  }

  public async getAttachmentById(attachmentId: string): Promise<AttachmentResponse> {
    const record = await this.database.prisma.attachment.findUnique({
      where: { id: attachmentId },
    })

    if (!record) {
      throw new NotFoundException(await this.translate('attachment_not_found'))
    }

    return this.mapAttachment(record)
  }

  private mapAttachment(entity: Attachment): AttachmentResponse {
    return AttachmentResponseSchema.parse({
      id: entity.id,
      attachmentType: entity.attachmentType ?? null,
      attachmentUrl: entity.attachmentUrl ?? null,
      fileName: entity.fileName,
      fileType: entity.fileType,
      fileSize: entity.fileSize,
      fileExt: entity.fileExt ?? null,
      bucketName: entity.bucketName,
      storageKey: entity.storageKey,
      url: entity.url ?? null,
      previewUrl: entity.previewUrl ?? null,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
    })
  }

  private translate(key: string, args?: Record<string, unknown>) {
    const lang = I18nContext.current()?.lang
    return this.i18n.translate<string>(`errors.${key}`, { lang, args })
  }
}
