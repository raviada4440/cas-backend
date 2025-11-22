import { z } from 'zod';

export const BiomarkerOverrideActionSchema = z.enum(['INCLUDE','EXCLUDE','OVERRIDE']);

export type BiomarkerOverrideActionType = `${z.infer<typeof BiomarkerOverrideActionSchema>}`

export default BiomarkerOverrideActionSchema;
