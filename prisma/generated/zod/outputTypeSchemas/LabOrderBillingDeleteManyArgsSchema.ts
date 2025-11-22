import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingWhereInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereInputSchema'

export const LabOrderBillingDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderBillingDeleteManyArgs> = z.object({
  where: LabOrderBillingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderBillingDeleteManyArgsSchema;
