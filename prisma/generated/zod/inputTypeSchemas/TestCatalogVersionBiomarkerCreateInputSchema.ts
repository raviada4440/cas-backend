import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema';
import { BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema } from './BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema';

export const TestCatalogVersionBiomarkerCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateInput> = z.strictObject({
  id: z.string().optional(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema),
  biomarker: z.lazy(() => BiomarkerCreateNestedOneWithoutTestBiomarkersInputSchema),
});

export default TestCatalogVersionBiomarkerCreateInputSchema;
