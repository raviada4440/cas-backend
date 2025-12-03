import { z } from 'zod'

import {
  HybridSearchInput,
  KeywordSearchInput,
  SearchResponseSchema,
  SemanticSearchInput,
} from './search'

export const ChatContactStatusEnum = z.enum(['online', 'offline', 'busy', 'away'])

export const ChatMessageSenderEnum = z.enum(['USER', 'ASSISTANT'])

export const ChatContactSchema = z
  .object({
    id: z.string().uuid(),
    displayName: z.string(),
    title: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    status: ChatContactStatusEnum,
    about: z.string().nullable(),
    lastMessagePreview: z.string().nullable(),
    lastMessageAt: z.string().datetime().nullable(),
    unreadCount: z.number().int().nonnegative(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .strict()

export const ChatMessageSchema = z
  .object({
    id: z.string().uuid(),
    contactId: z.string().uuid(),
    senderId: z.string(),
    senderType: ChatMessageSenderEnum,
    content: z.string(),
    replayMetadata: z.boolean().optional(),
    sentAt: z.string().datetime(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .strict()

export const ChatConversationSchema = z
  .object({
    contact: ChatContactSchema,
    messages: z.array(ChatMessageSchema),
  })
  .strict()

export const ChatSchemaResponseSchema = z
  .object({
    summary: z.string(),
    tables: z.array(z.string()),
    metadata: z.record(z.string(), z.array(z.string())),
  })
  .strict()

export const ChatProfileSchema = z
  .object({
    id: z.string().uuid(),
    displayName: z.string(),
    title: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    about: z.string().nullable(),
    status: ChatContactStatusEnum,
    settings: z
      .object({
        isTwoStepAuthVerificationEnabled: z.boolean().optional(),
        isNotificationsOn: z.boolean().optional(),
      })
      .partial()
      .optional(),
  })
  .strict()

const BaseChatRequestFields = {
  contactId: z.string().uuid().optional(),
  storeHistory: z.boolean().optional(),
}

export const ChatKeywordSearchRequestSchema = KeywordSearchInput.extend({
  mode: z.literal('keyword'),
  ...BaseChatRequestFields,
}).strict()

export const ChatSemanticSearchRequestSchema = SemanticSearchInput.extend({
  mode: z.literal('semantic'),
  ...BaseChatRequestFields,
}).strict()

export const ChatHybridSearchRequestSchema = HybridSearchInput.extend({
  mode: z.literal('hybrid'),
  ...BaseChatRequestFields,
}).strict()

export const ChatSearchRequestSchema = z.discriminatedUnion('mode', [
  ChatKeywordSearchRequestSchema,
  ChatSemanticSearchRequestSchema,
  ChatHybridSearchRequestSchema,
])

export const SendChatMessageInput = z
  .object({
    message: z.string().min(1),
    senderId: z.string().min(1).optional(),
    senderType: ChatMessageSenderEnum.optional(),
    replayMetadata: z.boolean().optional(),
  })
  .strict()

export const ChatSearchResponseSchema = z
  .object({
    contact: ChatContactSchema,
    userMessage: ChatMessageSchema.optional(),
    assistantMessage: ChatMessageSchema,
    results: SearchResponseSchema,
  })
  .strict()

export type ChatContact = z.infer<typeof ChatContactSchema>
export type ChatMessage = z.infer<typeof ChatMessageSchema>
export type ChatConversation = z.infer<typeof ChatConversationSchema>
export type ChatSchemaResponse = z.infer<typeof ChatSchemaResponseSchema>
export type ChatProfile = z.infer<typeof ChatProfileSchema>
export type ChatKeywordSearchRequest = z.infer<typeof ChatKeywordSearchRequestSchema>
export type ChatSemanticSearchRequest = z.infer<typeof ChatSemanticSearchRequestSchema>
export type ChatHybridSearchRequest = z.infer<typeof ChatHybridSearchRequestSchema>
export type ChatSearchRequest = z.infer<typeof ChatSearchRequestSchema>
export type ChatSearchResponse = z.infer<typeof ChatSearchResponseSchema>
export type SendChatMessageRequest = z.infer<typeof SendChatMessageInput>


