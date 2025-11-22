import { z } from 'zod';

export const TestCatalogStatusSchema = z.enum(['DRAFT','REVIEW','APPROVED','PUBLISHED','ARCHIVED','RETIRED']);

export type TestCatalogStatusType = `${z.infer<typeof TestCatalogStatusSchema>}`

export default TestCatalogStatusSchema;
