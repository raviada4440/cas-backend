import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema;
