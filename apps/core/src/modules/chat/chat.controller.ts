import { Body, Get, Param, Post, Query, Req } from '@nestjs/common'
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiController } from '@core/common/decorators/api-controller.decorator'
import { Auth } from '@core/common/decorators/auth.decorator'
import { ZodValidationPipe } from '@core/common/pipes/zod-validation.pipe'

import {
  ChatContactDto,
  ChatContactIdParamsDto,
  ChatConversationDto,
  ChatHybridSearchRequestDto,
  ChatKeywordSearchRequestDto,
  ChatProfileDto,
  ChatSchemaQueryDto,
  ChatSchemaResponseDto,
  ChatSearchResponseDto,
  ChatSemanticSearchRequestDto,
  SendChatMessageDto,
} from './chat.dto'
import { ChatService } from './chat.service'
import {
  ChatSearchRequest,
  ChatSearchRequestSchema,
  ChatSearchResponse,
  ChatConversation,
  ChatContact,
  ChatProfile,
  ChatSchemaResponse,
} from '@shared/contracts/chat'

interface RequestWithOwner extends FastifyRequest {
  owner?: {
    id?: string
  }
}

@ApiTags('Chat')
@ApiController('chat')
@Auth()
@ApiExtraModels(
  ChatKeywordSearchRequestDto,
  ChatSemanticSearchRequestDto,
  ChatHybridSearchRequestDto,
)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @ApiOperation({ summary: 'Execute a chat query using keyword, semantic, or hybrid search' })
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(ChatKeywordSearchRequestDto) },
        { $ref: getSchemaPath(ChatSemanticSearchRequestDto) },
        { $ref: getSchemaPath(ChatHybridSearchRequestDto) },
      ],
      discriminator: {
        propertyName: 'mode',
        mapping: {
          keyword: getSchemaPath(ChatKeywordSearchRequestDto),
          semantic: getSchemaPath(ChatSemanticSearchRequestDto),
          hybrid: getSchemaPath(ChatHybridSearchRequestDto),
        },
      },
    },
  })
  @ApiOkResponse({ type: ChatSearchResponseDto })
  public async search(
    @Req() req: RequestWithOwner,
    @Body(new ZodValidationPipe(ChatSearchRequestSchema)) payload: ChatSearchRequest,
  ): Promise<ChatSearchResponse> {
    const ownerId = req.owner?.id ?? null
    return this.chatService.executeSearch(payload, ownerId)
  }

  @Get('contacts')
  @ApiOperation({ summary: 'List chat contacts with unread counts and last activity' })
  @ApiOkResponse({ type: ChatContactDto, isArray: true })
  public async listContacts(): Promise<ChatContact[]> {
    return this.chatService.listContacts()
  }

  @Get('conversations/:contactId')
  @ApiOperation({ summary: 'Fetch full conversation history for a contact' })
  @ApiOkResponse({ type: ChatConversationDto })
  public async getConversation(@Param() params: ChatContactIdParamsDto): Promise<ChatConversation> {
    return this.chatService.getConversation(params.contactId)
  }

  @Post('conversations/:contactId/messages')
  @ApiOperation({ summary: 'Append a free-form message to a conversation' })
  @ApiOkResponse({ type: ChatConversationDto })
  public async sendMessage(
    @Req() req: RequestWithOwner,
    @Param() params: ChatContactIdParamsDto,
    @Body() payload: SendChatMessageDto,
  ): Promise<ChatConversation> {
    const ownerId = req.owner?.id ?? null
    return this.chatService.sendMessage(params.contactId, payload, ownerId)
  }

  @Get('schema')
  @ApiOperation({ summary: 'Inspect database schema metadata for chat-assisted search prompts' })
  @ApiOkResponse({ type: ChatSchemaResponseDto })
  public async getSchema(@Query() query: ChatSchemaQueryDto): Promise<ChatSchemaResponse> {
    return this.chatService.getSchemaOverview(query.q)
  }

  @Get('profile')
  @ApiOperation({ summary: 'Return the profile metadata for the signed-in chat user' })
  @ApiOkResponse({ type: ChatProfileDto })
  public async getProfile(): Promise<ChatProfile> {
    return this.chatService.getProfile()
  }
}
