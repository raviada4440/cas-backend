import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereInputSchema'
import { LoincPanelHierarchyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyOrderByWithAggregationInputSchema'
import { LoincPanelHierarchyScalarFieldEnumSchema } from '../inputTypeSchemas/LoincPanelHierarchyScalarFieldEnumSchema'
import { LoincPanelHierarchyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyScalarWhereWithAggregatesInputSchema'

export const LoincPanelHierarchyGroupByArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyGroupByArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincPanelHierarchyOrderByWithAggregationInputSchema.array(), LoincPanelHierarchyOrderByWithAggregationInputSchema ]).optional(),
  by: LoincPanelHierarchyScalarFieldEnumSchema.array(), 
  having: LoincPanelHierarchyScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincPanelHierarchyGroupByArgsSchema;
