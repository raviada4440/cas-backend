import { z } from 'zod';

export const TestCatalogCollectionMethodSchema = z.enum(['KIT','PSC']);

export type TestCatalogCollectionMethodType = `${z.infer<typeof TestCatalogCollectionMethodSchema>}`

export default TestCatalogCollectionMethodSchema;
