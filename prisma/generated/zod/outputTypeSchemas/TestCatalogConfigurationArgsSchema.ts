import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationSelectSchema } from '../inputTypeSchemas/TestCatalogConfigurationSelectSchema';
import { TestCatalogConfigurationIncludeSchema } from '../inputTypeSchemas/TestCatalogConfigurationIncludeSchema';

export const TestCatalogConfigurationArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogConfigurationSelectSchema).optional(),
  include: z.lazy(() => TestCatalogConfigurationIncludeSchema).optional(),
}).strict();

export default TestCatalogConfigurationArgsSchema;
