import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereInputSchema'

export const LoincPanelHierarchyDeleteManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyDeleteManyArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincPanelHierarchyDeleteManyArgsSchema;
