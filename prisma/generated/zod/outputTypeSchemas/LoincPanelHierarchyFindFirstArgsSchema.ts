import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereInputSchema'
import { LoincPanelHierarchyOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyOrderByWithRelationInputSchema'
import { LoincPanelHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereUniqueInputSchema'
import { LoincPanelHierarchyScalarFieldEnumSchema } from '../inputTypeSchemas/LoincPanelHierarchyScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincPanelHierarchySelectSchema: z.ZodType<Prisma.LoincPanelHierarchySelect> = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  level: z.boolean().optional(),
  code: z.boolean().optional(),
  sequence: z.boolean().optional(),
  codeText: z.boolean().optional(),
  component: z.boolean().optional(),
  property: z.boolean().optional(),
  timing: z.boolean().optional(),
  scale: z.boolean().optional(),
  method: z.boolean().optional(),
}).strict()

export const LoincPanelHierarchyFindFirstArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindFirstArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereInputSchema.optional(), 
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationInputSchema.array(), LoincPanelHierarchyOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincPanelHierarchyScalarFieldEnumSchema, LoincPanelHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LoincPanelHierarchyFindFirstArgsSchema;
