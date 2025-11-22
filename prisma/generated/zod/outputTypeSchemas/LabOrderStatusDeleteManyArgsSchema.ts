import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusWhereInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereInputSchema'

export const LabOrderStatusDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderStatusDeleteManyArgs> = z.object({
  where: LabOrderStatusWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderStatusDeleteManyArgsSchema;
