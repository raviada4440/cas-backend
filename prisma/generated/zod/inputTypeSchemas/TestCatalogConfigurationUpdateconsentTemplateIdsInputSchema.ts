import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogConfigurationUpdateconsentTemplateIdsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateconsentTemplateIdsInput> = z.strictObject({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
});

export default TestCatalogConfigurationUpdateconsentTemplateIdsInputSchema;
