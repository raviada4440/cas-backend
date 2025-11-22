import { z } from 'zod';

export const FamilyStructureSchema = z.enum(['NONE','PROBAND','DUO','TRIO']);

export type FamilyStructureType = `${z.infer<typeof FamilyStructureSchema>}`

export default FamilyStructureSchema;
