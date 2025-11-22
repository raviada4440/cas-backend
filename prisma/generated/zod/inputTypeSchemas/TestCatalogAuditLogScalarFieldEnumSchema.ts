import { z } from 'zod';

export const TestCatalogAuditLogScalarFieldEnumSchema = z.enum(['id','testId','versionNumber','configurationId','action','fieldName','oldValue','newValue','changeReason','ipAddress','userAgent','performedBy','performedAt','createdAt','updatedAt']);

export default TestCatalogAuditLogScalarFieldEnumSchema;
