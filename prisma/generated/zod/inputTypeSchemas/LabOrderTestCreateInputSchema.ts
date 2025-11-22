import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema';
import { TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema } from './TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema';

export const LabOrderTestCreateInputSchema: z.ZodType<Prisma.LabOrderTestCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema).optional(),
});

export default LabOrderTestCreateInputSchema;
