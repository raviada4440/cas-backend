import { z } from 'zod'

export function makeOptionalPropsNullable(
  schema: z.ZodObject<z.ZodRawShape, any>,
): z.ZodObject<z.ZodRawShape, any> {
  const overrides: Record<string, z.ZodTypeAny> = {}

  for (const [key, value] of Object.entries(schema.shape)) {
    if (value instanceof z.ZodOptional) {
      overrides[key] = z.optional((value.unwrap() as z.ZodTypeAny).nullable())
    }
  }

  if (Object.keys(overrides).length === 0) {
    return schema
  }

  return schema.extend(overrides)
}
