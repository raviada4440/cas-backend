import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderLoincUncheckedCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionOrderLoincUncheckedCreateInputSchema;
