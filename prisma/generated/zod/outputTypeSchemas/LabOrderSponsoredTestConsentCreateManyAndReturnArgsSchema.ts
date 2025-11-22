import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentCreateManyInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentCreateManyInputSchema'

export const LabOrderSponsoredTestConsentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderSponsoredTestConsentCreateManyInputSchema, LabOrderSponsoredTestConsentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderSponsoredTestConsentCreateManyAndReturnArgsSchema;
