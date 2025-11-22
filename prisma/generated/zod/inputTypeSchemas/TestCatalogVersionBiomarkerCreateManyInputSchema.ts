import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionBiomarkerCreateManyInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  hgncId: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionBiomarkerCreateManyInputSchema;
