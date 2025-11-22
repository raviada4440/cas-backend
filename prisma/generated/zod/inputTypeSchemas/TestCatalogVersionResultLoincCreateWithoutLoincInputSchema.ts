import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema';

export const TestCatalogVersionResultLoincCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema),
});

export default TestCatalogVersionResultLoincCreateWithoutLoincInputSchema;
