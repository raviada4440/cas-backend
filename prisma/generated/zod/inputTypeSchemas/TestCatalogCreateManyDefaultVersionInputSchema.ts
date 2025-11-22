import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';

export const TestCatalogCreateManyDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogCreateManyDefaultVersionInput> = z.strictObject({
  id: z.string().optional(),
  labId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  labTestId: z.string().optional().nullable(),
  testName: z.string().optional().nullable(),
  specialNotes: z.string().optional().nullable(),
  testCategory: z.string().optional().nullable(),
  testSubCategory: z.string().optional().nullable(),
  status: z.lazy(() => TestCatalogStatusSchema).optional(),
  currentVersion: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestCatalogCreateManyDefaultVersionInputSchema;
