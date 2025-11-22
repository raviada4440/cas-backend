import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderWhereInputSchema } from '../inputTypeSchemas/LabOrderWhereInputSchema'

export const LabOrderDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderDeleteManyArgs> = z.object({
  where: LabOrderWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderDeleteManyArgsSchema;
