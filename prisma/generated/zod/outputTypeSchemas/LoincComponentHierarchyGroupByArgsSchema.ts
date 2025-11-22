import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereInputSchema'
import { LoincComponentHierarchyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyOrderByWithAggregationInputSchema'
import { LoincComponentHierarchyScalarFieldEnumSchema } from '../inputTypeSchemas/LoincComponentHierarchyScalarFieldEnumSchema'
import { LoincComponentHierarchyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyScalarWhereWithAggregatesInputSchema'

export const LoincComponentHierarchyGroupByArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyGroupByArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincComponentHierarchyOrderByWithAggregationInputSchema.array(), LoincComponentHierarchyOrderByWithAggregationInputSchema ]).optional(),
  by: LoincComponentHierarchyScalarFieldEnumSchema.array(), 
  having: LoincComponentHierarchyScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincComponentHierarchyGroupByArgsSchema;
