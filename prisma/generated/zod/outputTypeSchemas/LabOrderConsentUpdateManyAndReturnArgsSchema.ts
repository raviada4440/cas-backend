import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderConsentUpdateManyMutationInputSchema'
import { LabOrderConsentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderConsentUncheckedUpdateManyInputSchema'
import { LabOrderConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereInputSchema'

export const LabOrderConsentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderConsentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderConsentUpdateManyMutationInputSchema, LabOrderConsentUncheckedUpdateManyInputSchema ]),
  where: LabOrderConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderConsentUpdateManyAndReturnArgsSchema;
