import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SponsoredTestCreateManyInputSchema: z.ZodType<Prisma.SponsoredTestCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string(),
  labTestId: z.string().optional().nullable(),
  sponsoredProgramId: z.string().optional().nullable(),
  labId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default SponsoredTestCreateManyInputSchema;
