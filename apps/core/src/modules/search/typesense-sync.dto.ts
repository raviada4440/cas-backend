import { createZodDto } from 'nestjs-zod/dto'

import {
  TypesenseHealthResponseSchema,
  TypesenseSyncRequestSchema,
  TypesenseSyncResponseSchema,
} from '@shared/contracts/search'

export class TypesenseSyncRequestDto extends createZodDto(TypesenseSyncRequestSchema) {}

export class TypesenseSyncResponseDto extends createZodDto(TypesenseSyncResponseSchema) {}

export class TypesenseHealthResponseDto extends createZodDto(TypesenseHealthResponseSchema) {}
