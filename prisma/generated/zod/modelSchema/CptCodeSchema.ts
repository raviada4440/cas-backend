import { z } from 'zod';

/////////////////////////////////////////
// CPT CODE SCHEMA
/////////////////////////////////////////

export const CptCodeSchema = z.object({
  code: z.string(),
  shortDescription: z.string().nullable(),
  longDescription: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type CptCode = z.infer<typeof CptCodeSchema>

/////////////////////////////////////////
// CPT CODE PARTIAL SCHEMA
/////////////////////////////////////////

export const CptCodePartialSchema = CptCodeSchema.partial()

export type CptCodePartial = z.infer<typeof CptCodePartialSchema>

export default CptCodeSchema;
