import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdWhereInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereInputSchema'

export const LabOrderIcdDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderIcdDeleteManyArgs> = z.object({
  where: LabOrderIcdWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderIcdDeleteManyArgsSchema;
