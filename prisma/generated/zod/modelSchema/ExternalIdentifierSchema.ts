import { z } from 'zod';

/////////////////////////////////////////
// EXTERNAL IDENTIFIER SCHEMA
/////////////////////////////////////////

/**
 * External identifiers for deterministic linking of FHIR resources to local records
 */
export const ExternalIdentifierSchema = z.object({
  id: z.string(),
  resourceType: z.string(),
  resourceId: z.string().nullable(),
  system: z.string(),
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ExternalIdentifier = z.infer<typeof ExternalIdentifierSchema>

/////////////////////////////////////////
// EXTERNAL IDENTIFIER PARTIAL SCHEMA
/////////////////////////////////////////

export const ExternalIdentifierPartialSchema = ExternalIdentifierSchema.partial()

export type ExternalIdentifierPartial = z.infer<typeof ExternalIdentifierPartialSchema>

export default ExternalIdentifierSchema;
