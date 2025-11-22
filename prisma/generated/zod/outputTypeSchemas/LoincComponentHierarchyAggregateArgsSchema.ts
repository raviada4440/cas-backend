import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereInputSchema'
import { LoincComponentHierarchyOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyOrderByWithRelationInputSchema'
import { LoincComponentHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereUniqueInputSchema'

export const LoincComponentHierarchyAggregateArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyAggregateArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationInputSchema.array(), LoincComponentHierarchyOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincComponentHierarchyAggregateArgsSchema;
