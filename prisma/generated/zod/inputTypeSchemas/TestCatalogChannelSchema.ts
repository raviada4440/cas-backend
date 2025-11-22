import { z } from 'zod';

export const TestCatalogChannelSchema = z.enum(['INTERNAL','CUSTOMER_PORTAL','PUBLIC_CATALOG','API_ONLY']);

export type TestCatalogChannelType = `${z.infer<typeof TestCatalogChannelSchema>}`

export default TestCatalogChannelSchema;
