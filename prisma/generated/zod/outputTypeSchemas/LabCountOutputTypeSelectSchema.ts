import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LabCountOutputTypeSelectSchema: z.ZodType<Prisma.LabCountOutputTypeSelect> = z.object({
  sponsoredTests: z.boolean().optional(),
  testCatalogs: z.boolean().optional(),
  labOrders: z.boolean().optional(),
}).strict();

export default LabCountOutputTypeSelectSchema;
