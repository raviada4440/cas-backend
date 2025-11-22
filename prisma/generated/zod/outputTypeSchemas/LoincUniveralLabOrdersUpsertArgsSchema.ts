import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereUniqueInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereUniqueInputSchema'
import { LoincUniveralLabOrdersCreateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersCreateInputSchema'
import { LoincUniveralLabOrdersUncheckedCreateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUncheckedCreateInputSchema'
import { LoincUniveralLabOrdersUpdateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUpdateInputSchema'
import { LoincUniveralLabOrdersUncheckedUpdateInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export const LoincUniveralLabOrdersUpsertArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpsertArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema, 
  create: z.union([ LoincUniveralLabOrdersCreateInputSchema, LoincUniveralLabOrdersUncheckedCreateInputSchema ]),
  update: z.union([ LoincUniveralLabOrdersUpdateInputSchema, LoincUniveralLabOrdersUncheckedUpdateInputSchema ]),
}).strict();

export default LoincUniveralLabOrdersUpsertArgsSchema;
