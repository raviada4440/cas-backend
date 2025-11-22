import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export default LoincUniveralLabOrdersSelectSchema;
