import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema';
import { LoincCreateNestedOneWithoutTestResultLoincsInputSchema } from './LoincCreateNestedOneWithoutTestResultLoincsInputSchema';

export const TestCatalogVersionResultLoincCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutResultLoincsInputSchema),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutTestResultLoincsInputSchema),
});

export default TestCatalogVersionResultLoincCreateInputSchema;
