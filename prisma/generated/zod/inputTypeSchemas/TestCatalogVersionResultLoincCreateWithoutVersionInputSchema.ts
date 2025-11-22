import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateNestedOneWithoutTestResultLoincsInputSchema } from './LoincCreateNestedOneWithoutTestResultLoincsInputSchema';

export const TestCatalogVersionResultLoincCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  resultCode: z.string().optional().nullable(),
  resultCodeName: z.string().optional().nullable(),
  uom: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutTestResultLoincsInputSchema),
});

export default TestCatalogVersionResultLoincCreateWithoutVersionInputSchema;
