import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereUniqueInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export const LoincUniveralLabOrdersFindUniqueArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindUniqueArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema, 
}).strict();

export default LoincUniveralLabOrdersFindUniqueArgsSchema;
