import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentSelectSchema } from '../inputTypeSchemas/TestCatalogVersionConsentSelectSchema';
import { TestCatalogVersionConsentIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionConsentIncludeSchema';

export const TestCatalogVersionConsentArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionConsentSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionConsentIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionConsentArgsSchema;
