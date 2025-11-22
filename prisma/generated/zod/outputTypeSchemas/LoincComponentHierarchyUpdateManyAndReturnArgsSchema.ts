import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyUpdateManyMutationInputSchema'
import { LoincComponentHierarchyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyUncheckedUpdateManyInputSchema'
import { LoincComponentHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereInputSchema'

export const LoincComponentHierarchyUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LoincComponentHierarchyUpdateManyMutationInputSchema, LoincComponentHierarchyUncheckedUpdateManyInputSchema ]),
  where: LoincComponentHierarchyWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincComponentHierarchyUpdateManyAndReturnArgsSchema;
