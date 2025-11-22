import { z } from 'zod';

export const ConsentAuditLogScalarFieldEnumSchema = z.enum(['id','consentTemplateId','testId','versionId','versionConsentId','action','fieldName','oldValue','newValue','changeReason','performedBy','performedAt','createdAt','updatedAt']);

export default ConsentAuditLogScalarFieldEnumSchema;
