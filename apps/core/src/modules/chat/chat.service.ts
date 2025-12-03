import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common'
import {
  Prisma,
  ChatContact as PrismaChatContact,
  ChatMessage as PrismaChatMessage,
} from '@db/client'

import {
  ChatContact,
  ChatConversation,
  ChatSearchRequest,
  ChatSearchRequestSchema,
  ChatSearchResponse,
  ChatSchemaResponseSchema,
  ChatProfile,
  SendChatMessageRequest,
  ChatMessageSenderEnum,
} from '@shared/contracts/chat'
import { SearchResponse, SearchResultItem } from '@shared/contracts/search'
import { DatabaseService } from '@core/processors/database/database.service'

import { SearchService } from '../search/search.service'

import { CHAT_CONTACT_SEED, CHAT_PROFILE_SEED, SeedMessage } from './chat.seed'
import { mapChatContact, mapChatMessage } from './chat.mapper'

type SchemaMetadata = Record<string, string[]>

interface SchemaCacheEntry {
  timestamp: number
  metadata: SchemaMetadata
}

const SCHEMA_CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour
const ASSISTANT_CONTACT_ID = '11111111-1111-1111-1111-111111111111'
const ASSISTANT_SENDER_ID = 'assistant'

@Injectable()
export class ChatService implements OnModuleInit {
  private readonly logger = new Logger(ChatService.name)
  private schemaCache: SchemaCacheEntry | null = null

  constructor(
    private readonly database: DatabaseService,
    private readonly searchService: SearchService,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.seedDefaultsIfNecessary()
  }

  async executeSearch(
    rawRequest: ChatSearchRequest,
    userId: string | null,
  ): Promise<ChatSearchResponse> {
    const request = ChatSearchRequestSchema.parse(rawRequest)
    const contact = await this.ensureContact(request.contactId)
    const shouldStore = request.storeHistory ?? true

    let userMessage: PrismaChatMessage | undefined
    if (shouldStore) {
      userMessage = await this.appendMessage(contact, {
        senderId: userId ?? contact.id,
        senderType: 'USER',
        content: request.query,
        sentAt: new Date(),
      })
    }

    const searchResult = await this.dispatchSearch(request)
    const assistantContent = this.buildAssistantMessage(searchResult)

    const assistantMessage = await this.appendMessage(contact, {
      senderId: ASSISTANT_SENDER_ID,
      senderType: 'ASSISTANT',
      content: assistantContent,
      sentAt: new Date(),
      replayMetadata: false,
    })

    const mappedContact = mapChatContact(await this.refreshContact(contact.id))
    return {
      contact: mappedContact,
      userMessage: userMessage ? mapChatMessage(userMessage) : undefined,
      assistantMessage: mapChatMessage(assistantMessage),
      results: searchResult,
    }
  }

  async listContacts(): Promise<ChatContact[]> {
    const contacts = await this.database.prisma.chatContact.findMany({
      orderBy: [{ lastMessageAt: 'desc' }, { displayName: 'asc' }],
    })
    return contacts.map(mapChatContact)
  }

  async getConversation(contactId: string): Promise<ChatConversation> {
    const contact = await this.database.prisma.chatContact.findUnique({
      where: { id: contactId },
      include: {
        messages: {
          orderBy: { sentAt: 'asc' },
        },
      },
    })
    if (!contact) {
      throw new NotFoundException('Contact not found')
    }

    await this.database.prisma.chatContact.update({
      where: { id: contactId },
      data: {
        unreadCount: 0,
      },
    })

    return {
      contact: mapChatContact(contact),
      messages: contact.messages.map(mapChatMessage),
    }
  }

  async sendMessage(
    contactId: string,
    payload: SendChatMessageRequest,
    fallbackSenderId: string | null,
  ): Promise<ChatConversation> {
    const contact = await this.ensureContact(contactId)
    const senderType = payload.senderType ?? ChatMessageSenderEnum.enum.USER
    const senderId = payload.senderId ?? fallbackSenderId ?? contactId

    await this.appendMessage(contact, {
      senderId,
      senderType,
      content: payload.message,
      sentAt: new Date(),
      replayMetadata: payload.replayMetadata ?? false,
    })

    const refreshed = await this.database.prisma.chatContact.findUniqueOrThrow({
      where: { id: contact.id },
      include: {
        messages: { orderBy: { sentAt: 'asc' } },
      },
    })

    return {
      contact: mapChatContact(refreshed),
      messages: refreshed.messages.map(mapChatMessage),
    }
  }

  async getProfile(): Promise<ChatProfile> {
    return {
      id: CHAT_PROFILE_SEED.id,
      displayName: CHAT_PROFILE_SEED.displayName,
      title: CHAT_PROFILE_SEED.title ?? null,
      avatarUrl: CHAT_PROFILE_SEED.avatarUrl ?? null,
      status: CHAT_PROFILE_SEED.status,
      about: CHAT_PROFILE_SEED.about ?? null,
      settings: CHAT_PROFILE_SEED.settings,
    }
  }

  async getSchemaOverview(query?: string) {
    const metadata = await this.loadSchemaMetadata()
    const tables = this.pickRelevantTables(metadata, query)
    const summary = this.buildSchemaSummary(metadata, tables)

    return ChatSchemaResponseSchema.parse({
      summary,
      tables,
      metadata,
    })
  }

  private async dispatchSearch(request: ChatSearchRequest) {
    switch (request.mode) {
      case 'keyword': {
        const { mode: _mode, contactId: _contactId, storeHistory: _store, ...rest } = request
        return this.searchService.keywordSearch(rest)
      }
      case 'semantic': {
        const { mode: _mode, contactId: _contactId, storeHistory: _store, ...rest } = request
        return this.searchService.semanticSearch(rest)
      }
      case 'hybrid': {
        const { mode: _mode, contactId: _contactId, storeHistory: _store, ...rest } = request
        return this.searchService.hybridSearch(rest)
      }
      default:
        throw new NotFoundException('Unsupported search mode')
    }
  }

  private buildAssistantMessage(result: SearchResponse): string {
    if (result.count === 0) {
      return `I could not find any catalog matches for "${result.query}" via ${result.mode} search. Try adjusting filters or switching modes.`
    }

    const topHighlights = this.buildTopHighlights(result.items)
    const base = `Found ${result.count} result${result.count === 1 ? '' : 's'} for "${
      result.query
    }" using ${result.mode} search.`
    return topHighlights ? `${base}\n\nTop matches:\n${topHighlights}` : base
  }

  private buildTopHighlights(items: SearchResultItem[]): string {
    const lines: string[] = []
    for (const [index, item] of items.slice(0, 3).entries()) {
      const metadata = (item.metadata as Record<string, unknown> | undefined) ?? {}
      const name =
        typeof metadata['testName'] === 'string'
          ? metadata['testName']
          : typeof metadata['name'] === 'string'
            ? metadata['name']
            : item.testId
      const status =
        typeof metadata['status'] === 'string' ? ` (${metadata['status'] as string})` : ''
      lines.push(`${index + 1}. ${name}${status}`)
    }
    return lines.join('\n')
  }

  private async appendMessage(
    contact: PrismaChatContact,
    payload: SeedMessage,
  ): Promise<PrismaChatMessage> {
    const created = await this.database.prisma.chatMessage.create({
      data: {
        contactId: contact.id,
        senderId: payload.senderId,
        senderType: payload.senderType,
        content: payload.content,
        replayMetadata: payload.replayMetadata ?? false,
        sentAt: payload.sentAt,
      },
    })

    await this.database.prisma.chatContact.update({
      where: { id: contact.id },
      data: {
        lastMessageAt: created.sentAt,
        lastMessagePreview: created.content.slice(0, 280),
        unreadCount: payload.senderType === 'ASSISTANT' ? contact.unreadCount : 0,
      },
    })

    return created
  }

  private async ensureContact(contactId?: string): Promise<PrismaChatContact> {
    if (contactId) {
      const existing = await this.database.prisma.chatContact.findUnique({
        where: { id: contactId },
      })
      if (!existing) {
        throw new NotFoundException('Contact not found')
      }
      return existing
    }

    return this.database.prisma.chatContact.upsert({
      where: { id: ASSISTANT_CONTACT_ID },
      create: {
        id: ASSISTANT_CONTACT_ID,
        displayName: 'Casandra Assistant',
        title: 'Search Copilot',
        status: 'online',
        avatarUrl: '/images/avatars/assistant.png',
        about: 'Helps you explore the catalog using keyword, semantic, or hybrid search.',
        unreadCount: 0,
      },
      update: {},
    })
  }

  private async refreshContact(contactId: string): Promise<PrismaChatContact> {
    return this.database.prisma.chatContact.findUniqueOrThrow({
      where: { id: contactId },
    })
  }

  private async seedDefaultsIfNecessary(): Promise<void> {
    const existing = await this.database.prisma.chatContact.count()
    if (existing > 0) {
      return
    }

    this.logger.log('Seeding default chat contacts and transcripts')

    await this.database.prisma.$transaction(async (tx) => {
      for (const seed of CHAT_CONTACT_SEED) {
        const contact = await tx.chatContact.create({
          data: {
            id: seed.id,
            displayName: seed.displayName,
            title: seed.title,
            avatarUrl: seed.avatarUrl,
            status: seed.status,
            about: seed.about,
            unreadCount: seed.unreadCount ?? 0,
          },
        })

        if (seed.messages && seed.messages.length) {
          let lastMessageAt: Date | null = null
          let lastMessagePreview: string | null = null

          for (const message of seed.messages) {
            await tx.chatMessage.create({
              data: {
                contactId: contact.id,
                senderId: message.senderId,
                senderType: message.senderType,
                content: message.content,
                replayMetadata: message.replayMetadata ?? false,
                sentAt: message.sentAt,
              },
            })
            lastMessageAt = message.sentAt
            lastMessagePreview = message.content.slice(0, 280)
          }

          await tx.chatContact.update({
            where: { id: contact.id },
            data: {
              lastMessageAt,
              lastMessagePreview,
            },
          })
        }
      }
    })
  }

  private async loadSchemaMetadata(): Promise<SchemaMetadata> {
    if (this.schemaCache && Date.now() - this.schemaCache.timestamp < SCHEMA_CACHE_TTL_MS) {
      return this.schemaCache.metadata
    }

    const columns: Array<{ table_name: string; column_name: string }> = await this.database.prisma
      .$queryRaw(Prisma.sql`
        SELECT table_name, column_name
        FROM information_schema.columns
        WHERE table_schema = 'public'
      `)

    const metadata: SchemaMetadata = {}
    for (const row of columns) {
      const table = String(row.table_name)
      metadata[table] = metadata[table] ?? []
      metadata[table].push(row.column_name)
    }

    this.schemaCache = {
      timestamp: Date.now(),
      metadata,
    }

    return metadata
  }

  private pickRelevantTables(metadata: SchemaMetadata, query?: string): string[] {
    if (!query) {
      return Object.keys(metadata).slice(0, 6)
    }

    const tokens = query
      .toLowerCase()
      .split(/\W+/)
      .filter((token) => token.length > 1)

    const scores = new Map<string, number>()
    for (const table of Object.keys(metadata)) {
      let score = 0
      for (const token of tokens) {
        if (table.toLowerCase().includes(token)) {
          score += 2
        }
        for (const column of metadata[table]) {
          if (column.toLowerCase().includes(token)) {
            score += 1
          }
        }
      }
      scores.set(table, score)
    }

    return Array.from(scores.entries())
      .filter(([, s]) => s > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([table]) => table)
  }

  private buildSchemaSummary(metadata: SchemaMetadata, tables: string[]): string {
    return tables
      .map((table) => {
        const columns = metadata[table] ?? []
        return `Table ${table}: ${columns.slice(0, 12).join(', ')}`
      })
      .join('\n')
  }
}
