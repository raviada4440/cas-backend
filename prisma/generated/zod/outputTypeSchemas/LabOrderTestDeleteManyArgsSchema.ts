import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestWhereInputSchema } from '../inputTypeSchemas/LabOrderTestWhereInputSchema'

export const LabOrderTestDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderTestDeleteManyArgs> = z.object({
  where: LabOrderTestWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderTestDeleteManyArgsSchema;
