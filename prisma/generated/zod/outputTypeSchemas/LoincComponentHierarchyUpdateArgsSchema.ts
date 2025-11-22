import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyUpdateInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyUpdateInputSchema'
import { LoincComponentHierarchyUncheckedUpdateInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyUncheckedUpdateInputSchema'
import { LoincComponentHierarchyWhereUniqueInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincComponentHierarchySelectSchema: z.ZodType<Prisma.LoincComponentHierarchySelect> = z.object({
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

export const LoincComponentHierarchyUpdateArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  data: z.union([ LoincComponentHierarchyUpdateInputSchema, LoincComponentHierarchyUncheckedUpdateInputSchema ]),
  where: LoincComponentHierarchyWhereUniqueInputSchema, 
}).strict();

export default LoincComponentHierarchyUpdateArgsSchema;
