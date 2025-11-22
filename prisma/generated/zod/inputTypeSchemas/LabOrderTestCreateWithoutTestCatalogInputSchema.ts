import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema';

export const LabOrderTestCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestCreateWithoutTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema).optional(),
});

export default LabOrderTestCreateWithoutTestCatalogInputSchema;
