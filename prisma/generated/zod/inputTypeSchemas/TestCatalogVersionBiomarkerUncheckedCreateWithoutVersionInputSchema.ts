import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  hgncId: z.string(),
  transcriptReference: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema;
