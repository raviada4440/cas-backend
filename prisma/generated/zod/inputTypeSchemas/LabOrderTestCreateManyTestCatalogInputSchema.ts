import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderTestCreateManyTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestCreateManyTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderTestCreateManyTestCatalogInputSchema;
