import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"

export const ProviderFavoriteTestIncludeSchema: z.ZodType<Prisma.ProviderFavoriteTestInclude> = z.object({
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict();

export default ProviderFavoriteTestIncludeSchema;
