import axios from 'axios'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EmbeddingService {
  private readonly logger = new Logger(EmbeddingService.name)
  private readonly provider: string
  private readonly openAiApiKey?: string
  private readonly openAiBaseUrl: string
  private readonly openAiEmbeddingModel: string

  constructor(private readonly configService: ConfigService) {
    this.provider = this.configService.get<string>('SEARCH_EMBEDDING_PROVIDER') ?? 'openai'
    this.openAiApiKey = this.configService.get<string>('OPENAI_API_KEY')
    this.openAiEmbeddingModel =
      this.configService.get<string>('OPENAI_EMBEDDING_MODEL') ?? 'text-embedding-3-small'
    this.openAiBaseUrl =
      this.configService.get<string>('OPENAI_BASE_URL') ?? 'https://api.openai.com/v1'
  }

  async embedText(text: string): Promise<number[]> {
    if (!text?.trim()) {
      throw new Error('Cannot embed empty text')
    }

    switch (this.provider) {
      case 'openai':
        return this.generateOpenAiEmbedding(text)
      case 'none':
        throw new Error('Embedding provider is set to "none"')
      default:
        throw new Error(`Unsupported embedding provider: ${this.provider}`)
    }
  }

  private async generateOpenAiEmbedding(text: string): Promise<number[]> {
    if (!this.openAiApiKey) {
      throw new Error('OPENAI_API_KEY is not configured')
    }

    try {
      const response = await axios.post(
        `${this.openAiBaseUrl}/embeddings`,
        {
          model: this.openAiEmbeddingModel,
          input: text,
        },
        {
          headers: {
            Authorization: `Bearer ${this.openAiApiKey}`,
            'Content-Type': 'application/json',
          },
          timeout: 15000,
        },
      )

      const data = response.data?.data?.[0]?.embedding
      if (!Array.isArray(data)) {
        throw new Error('OpenAI response did not contain an embedding vector')
      }
      return data
    } catch (error) {
      this.logger.error(`Failed to generate embedding via OpenAI: ${(error as Error).message}`)
      throw error
    }
  }
}
