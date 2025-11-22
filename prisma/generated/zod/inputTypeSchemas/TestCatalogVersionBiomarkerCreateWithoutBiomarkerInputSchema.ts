import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema';

export const TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateWithoutBiomarkerInput> = z.strictObject({
  id: z.string().optional(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema),
});

export default TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema;
