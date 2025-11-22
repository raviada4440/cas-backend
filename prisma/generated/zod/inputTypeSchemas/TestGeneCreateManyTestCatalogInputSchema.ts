import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestGeneCreateManyTestCatalogInputSchema: z.ZodType<Prisma.TestGeneCreateManyTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  gene: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestGeneCreateManyTestCatalogInputSchema;
