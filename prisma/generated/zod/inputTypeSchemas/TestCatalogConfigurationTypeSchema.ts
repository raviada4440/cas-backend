import { z } from 'zod';

export const TestCatalogConfigurationTypeSchema = z.enum(['OPERATIONAL','CUSTOMER']);

export type TestCatalogConfigurationTypeType = `${z.infer<typeof TestCatalogConfigurationTypeSchema>}`

export default TestCatalogConfigurationTypeSchema;
