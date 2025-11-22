import { z } from 'zod';

export const TestCatalogConfigurationStatusSchema = z.enum(['DRAFT','ACTIVE','INACTIVE','ARCHIVED']);

export type TestCatalogConfigurationStatusType = `${z.infer<typeof TestCatalogConfigurationStatusSchema>}`

export default TestCatalogConfigurationStatusSchema;
