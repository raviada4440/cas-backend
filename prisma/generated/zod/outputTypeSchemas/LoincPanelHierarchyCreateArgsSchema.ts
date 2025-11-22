import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyCreateInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyCreateInputSchema'
import { LoincPanelHierarchyUncheckedCreateInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyUncheckedCreateInputSchema'
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

export const LoincPanelHierarchyCreateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  data: z.union([ LoincPanelHierarchyCreateInputSchema, LoincPanelHierarchyUncheckedCreateInputSchema ]),
}).strict();

export default LoincPanelHierarchyCreateArgsSchema;
