import { ChatContact as PrismaChatContact, ChatMessage as PrismaChatMessage } from '@db/client'

import { ChatContactSchema, ChatMessageSchema } from '@shared/contracts/chat'

export const mapChatContact = (contact: PrismaChatContact) =>
  ChatContactSchema.parse({
    id: contact.id,
    displayName: contact.displayName,
    title: contact.title ?? null,
    avatarUrl: contact.avatarUrl ?? null,
    status: contact.status,
    about: contact.about ?? null,
    lastMessagePreview: contact.lastMessagePreview ?? null,
    lastMessageAt: contact.lastMessageAt ? contact.lastMessageAt.toISOString() : null,
    unreadCount: contact.unreadCount,
    createdAt: contact.createdAt.toISOString(),
    updatedAt: contact.updatedAt.toISOString(),
  })

export const mapChatMessage = (message: PrismaChatMessage) =>
  ChatMessageSchema.parse({
    id: message.id,
    contactId: message.contactId,
    senderId: message.senderId,
    senderType: message.senderType,
    content: message.content,
    replayMetadata: message.replayMetadata,
    sentAt: message.sentAt.toISOString(),
    createdAt: message.createdAt.toISOString(),
    updatedAt: message.updatedAt.toISOString(),
  })
