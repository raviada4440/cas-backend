import { z } from 'zod';

export const AuditActionSchema = z.enum(['CREATE','UPDATE','DELETE','PUBLISH','ARCHIVE','RETIRE','RESTORE','APPROVE','REJECT','VERSION_CREATE','REVIEWER_ASSIGNED','STATUS_CHANGE','VERSION_CHANGE','CONFIGURATION_CREATE','CONFIGURATION_UPDATE','CONFIGURATION_DELETE']);

export type AuditActionType = `${z.infer<typeof AuditActionSchema>}`

export default AuditActionSchema;
