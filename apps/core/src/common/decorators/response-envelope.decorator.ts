import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, ApiResponseOptions, getSchemaPath } from '@nestjs/swagger'

type ResponseEnvelopeOptions = ApiResponseOptions & {
  isArray?: boolean
  type?: unknown
  schema?: unknown
}

class ResponseEnvelopeLinksDto {
  next?: string | null
  prev?: string | null
  self?: string | null
}

class ResponseEnvelopeMetaDto {
  total?: number
  page?: number
  pageSize?: number
  // Additional metadata fields are allowed at runtime; Swagger shows known keys.
}

class ResponseEnvelopeDto<TData = unknown> {
  data!: TData
  meta?: ResponseEnvelopeMetaDto
  links?: ResponseEnvelopeLinksDto
}

/**
 * Document a response wrapped in the canonical envelope used by ResponseInterceptor:
 * { data: <payload>, meta?: {...}, links?: {...} }
 */
export const ApiOkResponseEnvelope = <TModel extends Type<unknown>>(
  modelOrOptions?: TModel | ResponseEnvelopeOptions,
  maybeOptions?: ResponseEnvelopeOptions,
) => {
  const isModel = typeof modelOrOptions === 'function'
  const model = (isModel ? modelOrOptions : undefined) as Type<unknown> | undefined
  const options =
    (isModel ? maybeOptions : (modelOrOptions as ResponseEnvelopeOptions | undefined)) ?? {}
  const { isArray, type, schema, ...rest } = options

  const resolvedType = type ?? model
  const dataSchema = resolveDataSchema(resolvedType, schema, Boolean(isArray))
  const extraModels = [
    ResponseEnvelopeDto,
    ResponseEnvelopeMetaDto,
    ResponseEnvelopeLinksDto,
    ...(shouldRegisterModel(resolvedType) ? [resolvedType as Type<unknown>] : []),
  ]

  return applyDecorators(
    ApiExtraModels(...extraModels),
    ApiOkResponse({
      ...rest,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseEnvelopeDto) },
          { properties: { data: dataSchema }, required: ['data'] },
        ],
      },
    }),
  )
}

export { ResponseEnvelopeDto, ResponseEnvelopeMetaDto, ResponseEnvelopeLinksDto }

function shouldRegisterModel(resolvedType: unknown): resolvedType is Type<unknown> {
  if (!resolvedType || typeof resolvedType !== 'function') return false
  return ![String, Number, Boolean, Object].includes(resolvedType as never)
}

function resolveDataSchema(resolvedType: unknown, schema: unknown, isArray: boolean) {
  const baseSchema = schema ?? inferSchemaFromType(resolvedType)
  return isArray ? { type: 'array', items: baseSchema } : baseSchema
}

function inferSchemaFromType(resolvedType: unknown) {
  if (!resolvedType) {
    return { type: 'object' }
  }
  if (resolvedType === String) return { type: 'string' }
  if (resolvedType === Number) return { type: 'number' }
  if (resolvedType === Boolean) return { type: 'boolean' }
  if (resolvedType === Object) return { type: 'object' }
  if (typeof resolvedType === 'function') {
    return { $ref: getSchemaPath(resolvedType as Type<unknown>) }
  }
  return { type: 'object' }
}
