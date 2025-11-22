import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogConfigurationCreateconsentTemplateIdsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateconsentTemplateIdsInput> = z.strictObject({
  set: z.string().array(),
});

export default TestCatalogConfigurationCreateconsentTemplateIdsInputSchema;
