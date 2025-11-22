import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyUpdateInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyUpdateInputSchema'
import { LoincPanelHierarchyUncheckedUpdateInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyUncheckedUpdateInputSchema'
import { LoincPanelHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereUniqueInputSchema'
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

export const LoincPanelHierarchyUpdateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  data: z.union([ LoincPanelHierarchyUpdateInputSchema, LoincPanelHierarchyUncheckedUpdateInputSchema ]),
  where: LoincPanelHierarchyWhereUniqueInputSchema, 
}).strict();

export default LoincPanelHierarchyUpdateArgsSchema;
