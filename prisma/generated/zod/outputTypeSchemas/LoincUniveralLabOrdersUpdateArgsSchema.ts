import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersUpdateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUpdateInputSchema'
import { LoincUniveralLabOrdersUncheckedUpdateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUncheckedUpdateInputSchema'
import { LoincUniveralLabOrdersWhereUniqueInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export const LoincUniveralLabOrdersUpdateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  data: z.union([ LoincUniveralLabOrdersUpdateInputSchema, LoincUniveralLabOrdersUncheckedUpdateInputSchema ]),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema, 
}).strict();

export default LoincUniveralLabOrdersUpdateArgsSchema;
