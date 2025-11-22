import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionResultLoincCreateManyVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateManyVersionInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  loincCode: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionResultLoincCreateManyVersionInputSchema;
