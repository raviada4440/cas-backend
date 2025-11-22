import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema } from './TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema';

export const LabOrderTestCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema).optional(),
});

export default LabOrderTestCreateWithoutLabOrderInputSchema;
