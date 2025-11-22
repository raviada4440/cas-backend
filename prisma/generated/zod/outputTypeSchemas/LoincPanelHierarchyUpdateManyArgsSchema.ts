import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincPanelHierarchyUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyUpdateManyMutationInputSchema'
import { LoincPanelHierarchyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyUncheckedUpdateManyInputSchema'
import { LoincPanelHierarchyWhereInputSchema } from '../inputTypeSchemas/LoincPanelHierarchyWhereInputSchema'

export const LoincPanelHierarchyUpdateManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateManyArgs> = z.object({
  data: z.union([ LoincPanelHierarchyUpdateManyMutationInputSchema, LoincPanelHierarchyUncheckedUpdateManyInputSchema ]),
  where: LoincPanelHierarchyWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LoincPanelHierarchyUpdateManyArgsSchema;
