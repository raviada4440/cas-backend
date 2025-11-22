import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderBillingUpdateManyMutationInputSchema'
import { LabOrderBillingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderBillingUncheckedUpdateManyInputSchema'
import { LabOrderBillingWhereInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereInputSchema'

export const LabOrderBillingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderBillingUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderBillingUpdateManyMutationInputSchema, LabOrderBillingUncheckedUpdateManyInputSchema ]),
  where: LabOrderBillingWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderBillingUpdateManyAndReturnArgsSchema;
