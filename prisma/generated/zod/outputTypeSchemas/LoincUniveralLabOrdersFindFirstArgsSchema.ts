import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereInputSchema'
import { LoincUniveralLabOrdersOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersOrderByWithRelationInputSchema'
import { LoincUniveralLabOrdersWhereUniqueInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereUniqueInputSchema'
import { LoincUniveralLabOrdersScalarFieldEnumSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  loincNum: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  orderObs: z.boolean().optional(),
}).strict()

export const LoincUniveralLabOrdersFindFirstArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindFirstArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(), 
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationInputSchema.array(), LoincUniveralLabOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincUniveralLabOrdersScalarFieldEnumSchema, LoincUniveralLabOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LoincUniveralLabOrdersFindFirstArgsSchema;
