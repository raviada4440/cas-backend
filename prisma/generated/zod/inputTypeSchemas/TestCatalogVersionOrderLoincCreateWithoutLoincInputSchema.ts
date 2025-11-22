import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema';

export const TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateWithoutLoincInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutOrderLoincsInputSchema),
});

export default TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema;
