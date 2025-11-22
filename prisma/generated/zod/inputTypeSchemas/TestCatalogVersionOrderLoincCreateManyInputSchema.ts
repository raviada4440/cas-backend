import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderLoincCreateManyInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionOrderLoincCreateManyInputSchema;
