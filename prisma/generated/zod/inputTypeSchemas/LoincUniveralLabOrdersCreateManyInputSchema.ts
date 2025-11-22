import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LoincUniveralLabOrdersCreateManyInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateManyInput> = z.strictObject({
  loincNum: z.string(),
  longCommonName: z.string().optional().nullable(),
  orderObs: z.string().optional().nullable(),
});

export default LoincUniveralLabOrdersCreateManyInputSchema;
