import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyCreateManyInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyCreateManyInputSchema'

export const LoincComponentHierarchyCreateManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateManyArgs> = z.object({
  data: z.union([ LoincComponentHierarchyCreateManyInputSchema, LoincComponentHierarchyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincComponentHierarchyCreateManyArgsSchema;
