import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema } from './BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema';

export const TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  biomarker: z.lazy(() => BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema),
});

export default TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema;
