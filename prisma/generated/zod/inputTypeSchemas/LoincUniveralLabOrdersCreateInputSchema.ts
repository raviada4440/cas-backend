import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LoincUniveralLabOrdersCreateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateInput> = z.strictObject({
  loincNum: z.string(),
  longCommonName: z.string().optional().nullable(),
  orderObs: z.string().optional().nullable(),
});

export default LoincUniveralLabOrdersCreateInputSchema;
