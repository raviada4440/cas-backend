import { z } from 'zod';

export const ConsentTypeSchema = z.enum(['GENERAL_CONSENT','SPECIFIC_CONSENT','RESEARCH_CONSENT','MINOR_CONSENT','EMERGENCY_CONSENT','CUSTOM_CONSENT','HIPAA_PRIVACY_CONSENT']);

export type ConsentTypeType = `${z.infer<typeof ConsentTypeSchema>}`

export default ConsentTypeSchema;
