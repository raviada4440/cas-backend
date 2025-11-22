import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUpdateManyMutationInputSchema'
import { LoincUniveralLabOrdersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUncheckedUpdateManyInputSchema'
import { LoincUniveralLabOrdersWhereInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereInputSchema'

export const LoincUniveralLabOrdersUpdateManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateManyArgs> = z.object({
  data: z.union([ LoincUniveralLabOrdersUpdateManyMutationInputSchema, LoincUniveralLabOrdersUncheckedUpdateManyInputSchema ]),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincUniveralLabOrdersUpdateManyArgsSchema;
