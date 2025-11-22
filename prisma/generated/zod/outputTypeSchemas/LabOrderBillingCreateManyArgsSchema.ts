import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingCreateManyInputSchema } from '../inputTypeSchemas/LabOrderBillingCreateManyInputSchema'

export const LabOrderBillingCreateManyArgsSchema: z.ZodType<Prisma.LabOrderBillingCreateManyArgs> = z.object({
  data: z.union([ LabOrderBillingCreateManyInputSchema, LabOrderBillingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderBillingCreateManyArgsSchema;
