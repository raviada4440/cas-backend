import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersCreateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersCreateInputSchema'
import { LoincUniveralLabOrdersUncheckedCreateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export const LoincUniveralLabOrdersCreateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  data: z.union([ LoincUniveralLabOrdersCreateInputSchema, LoincUniveralLabOrdersUncheckedCreateInputSchema ]),
}).strict();

export default LoincUniveralLabOrdersCreateArgsSchema;
