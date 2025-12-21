import * as z from 'zod/v4'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const Uuid = z.string().regex(UUID_REGEX, 'Invalid UUID')

export const UtcDateTime = z
  .string()
  .datetime({ offset: true })
  .refine((value) => value.endsWith('Z'), { message: "DateTime must be UTC (ends with 'Z')" })

const JsonPrimitive = z.union([z.string(), z.number(), z.boolean(), z.null()])

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | {
      [key: string]: JsonValue
    }

export const JsonValue: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([JsonPrimitive, z.array(JsonValue), z.record(z.string(), JsonValue)]),
)

export const ResponseEnvelopeLinksSchema = z
  .object({
    next: z.string().nullable().optional(),
    prev: z.string().nullable().optional(),
    self: z.string().nullable().optional(),
  })
  .strict()

export const ResponseEnvelopeMetaSchema = z
  .object({
    total: z.number().int().optional(),
    page: z.number().int().optional(),
    pageSize: z.number().int().optional(),
  })
  .catchall(z.unknown())
  .strict()

export const ResponseEnvelopeSchema = z
  .object({
    data: z.unknown(),
    meta: ResponseEnvelopeMetaSchema.optional(),
    links: ResponseEnvelopeLinksSchema.optional(),
  })
  .strict()

export type ResponseEnvelopeLinks = z.infer<typeof ResponseEnvelopeLinksSchema>
export type ResponseEnvelopeMeta = z.infer<typeof ResponseEnvelopeMetaSchema>
export type ResponseEnvelope<T = unknown> = {
  data: T
  meta?: ResponseEnvelopeMeta
  links?: ResponseEnvelopeLinks
}
