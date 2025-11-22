import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyCreateManyInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyCreateManyInputSchema'

export const LoincComponentHierarchyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateManyAndReturnArgs> = z.object({
  data: z.union([ LoincComponentHierarchyCreateManyInputSchema, LoincComponentHierarchyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincComponentHierarchyCreateManyAndReturnArgsSchema;
