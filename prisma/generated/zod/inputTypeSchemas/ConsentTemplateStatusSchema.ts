import { z } from 'zod';

export const ConsentTemplateStatusSchema = z.enum(['DRAFT','ACTIVE','RETIRED']);

export type ConsentTemplateStatusType = `${z.infer<typeof ConsentTemplateStatusSchema>}`

export default ConsentTemplateStatusSchema;
