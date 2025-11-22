import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincCreateNestedOneWithoutTestOrderLoincsInputSchema } from './LoincCreateNestedOneWithoutTestOrderLoincsInputSchema';

export const TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutTestOrderLoincsInputSchema),
});

export default TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema;
