import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TestCatalogVersionOrderFormCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCountOutputTypeSelect> = z.object({
  labOrderForms: z.boolean().optional(),
}).strict();

export default TestCatalogVersionOrderFormCountOutputTypeSelectSchema;
