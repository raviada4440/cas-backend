import { z } from 'zod';

export const TestCatalogApprovalScalarFieldEnumSchema = z.enum(['id','versionId','testConfigurationId','workflowStep','stepName','requiredRole','status','comments','approvedBy','approvedAt','createdAt','updatedAt']);

export default TestCatalogApprovalScalarFieldEnumSchema;
