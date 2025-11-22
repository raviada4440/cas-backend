import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema';
import { LoincCreateNestedOneWithoutTestOrderLoincsInputSchema } from './LoincCreateNestedOneWithoutTestOrderLoincsInputSchema';

export const TestCatalogVersionOrderLoincCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema),
  loinc: z.lazy(() => LoincCreateNestedOneWithoutTestOrderLoincsInputSchema),
});

export default TestCatalogVersionOrderLoincCreateInputSchema;
