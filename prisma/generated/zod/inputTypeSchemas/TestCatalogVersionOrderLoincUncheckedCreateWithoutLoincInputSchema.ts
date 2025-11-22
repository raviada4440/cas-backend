import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema;
