import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyCreateManyInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyCreateManyInputSchema'

export const LoincPanelHierarchyCreateManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateManyArgs> = z.object({
  data: z.union([ LoincPanelHierarchyCreateManyInputSchema, LoincPanelHierarchyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincPanelHierarchyCreateManyArgsSchema;
