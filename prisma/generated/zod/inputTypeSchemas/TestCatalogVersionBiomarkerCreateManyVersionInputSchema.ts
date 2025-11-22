import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionBiomarkerCreateManyVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateManyVersionInput> = z.strictObject({
  id: z.string().optional(),
  hgncId: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionBiomarkerCreateManyVersionInputSchema;
