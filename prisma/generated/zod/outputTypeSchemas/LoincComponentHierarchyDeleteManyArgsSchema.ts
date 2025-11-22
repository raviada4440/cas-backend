import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincComponentHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincComponentHierarchyWhereInputSchema'

export const LoincComponentHierarchyDeleteManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyDeleteManyArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincComponentHierarchyDeleteManyArgsSchema;
