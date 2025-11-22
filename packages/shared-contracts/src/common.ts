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
