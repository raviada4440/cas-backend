import { z } from 'zod';

export const TestCatalogVersionStatusSchema = z.enum(['DRAFT','IN_REVIEW','APPROVED','PUBLISHED','ARCHIVED','RETIRED']);

export type TestCatalogVersionStatusType = `${z.infer<typeof TestCatalogVersionStatusSchema>}`

export default TestCatalogVersionStatusSchema;
