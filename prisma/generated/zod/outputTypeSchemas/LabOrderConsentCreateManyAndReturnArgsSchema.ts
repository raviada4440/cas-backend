import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentCreateManyInputSchema } from '../inputTypeSchemas/LabOrderConsentCreateManyInputSchema'

export const LabOrderConsentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderConsentCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderConsentCreateManyInputSchema, LabOrderConsentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderConsentCreateManyAndReturnArgsSchema;
