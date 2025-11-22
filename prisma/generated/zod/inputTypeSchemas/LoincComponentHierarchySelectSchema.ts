import { z } from 'zod';
import type { Prisma } from '@prisma/client';

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

export default LoincComponentHierarchySelectSchema;
