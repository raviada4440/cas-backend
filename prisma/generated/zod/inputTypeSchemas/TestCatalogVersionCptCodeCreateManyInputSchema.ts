import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TestCatalogVersionCptCodeCreateManyInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  cptCode: z.string(),
  modifier: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogVersionCptCodeCreateManyInputSchema;
