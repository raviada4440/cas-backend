import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import {
  ChatConversationSchema,
  ChatContactSchema,
  ChatHybridSearchRequestSchema,
  ChatKeywordSearchRequestSchema,
  ChatSearchResponseSchema,
  ChatSchemaResponseSchema,
  ChatProfileSchema,
  ChatSemanticSearchRequestSchema,
  SendChatMessageInput,
} from '@shared/contracts/chat'

export class ChatKeywordSearchRequestDto extends createZodDto(ChatKeywordSearchRequestSchema) {}

export class ChatSemanticSearchRequestDto extends createZodDto(ChatSemanticSearchRequestSchema) {}

export class ChatHybridSearchRequestDto extends createZodDto(ChatHybridSearchRequestSchema) {}

export class ChatSearchResponseDto extends createZodDto(ChatSearchResponseSchema) {}

export class ChatContactDto extends createZodDto(ChatContactSchema) {}

export class ChatConversationDto extends createZodDto(ChatConversationSchema) {}

export class ChatSchemaResponseDto extends createZodDto(ChatSchemaResponseSchema) {}

export class ChatProfileDto extends createZodDto(ChatProfileSchema) {}

export class SendChatMessageDto extends createZodDto(SendChatMessageInput) {}

export const ChatContactIdParamsSchema = z
  .object({
    contactId: z.string().uuid(),
  })
  .strict()

export class ChatContactIdParamsDto extends createZodDto(ChatContactIdParamsSchema) {}

export const ChatSchemaQuerySchema = z
  .object({
    q: z.string().optional(),
  })
  .strict()

export class ChatSchemaQueryDto extends createZodDto(ChatSchemaQuerySchema) {}
