import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LoincUniveralLabOrdersUncheckedCreateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUncheckedCreateInput> = z.strictObject({
  loincNum: z.string(),
  longCommonName: z.string().optional().nullable(),
  orderObs: z.string().optional().nullable(),
});

export default LoincUniveralLabOrdersUncheckedCreateInputSchema;
