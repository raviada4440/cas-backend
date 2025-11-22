import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateNestedOneWithoutTestGenesInputSchema } from './TestCatalogCreateNestedOneWithoutTestGenesInputSchema';

export const TestGeneCreateInputSchema: z.ZodType<Prisma.TestGeneCreateInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  gene: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestGenesInputSchema),
});

export default TestGeneCreateInputSchema;
