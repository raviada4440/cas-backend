import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereInputSchema'
import { LoincPanelHierarchyOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyOrderByWithRelationInputSchema'
import { LoincPanelHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereUniqueInputSchema'

export const LoincPanelHierarchyAggregateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyAggregateArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationInputSchema.array(), LoincPanelHierarchyOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincPanelHierarchyAggregateArgsSchema;
