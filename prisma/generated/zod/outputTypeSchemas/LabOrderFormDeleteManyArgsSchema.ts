import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormWhereInputSchema } from '../inputTypeSchemas/LabOrderFormWhereInputSchema'

export const LabOrderFormDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderFormDeleteManyArgs> = z.object({
  where: LabOrderFormWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderFormDeleteManyArgsSchema;
