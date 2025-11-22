import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentCreateManyInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentCreateManyInputSchema'

export const LabOrderSponsoredTestConsentCreateManyArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateManyArgs> = z.object({
  data: z.union([ LabOrderSponsoredTestConsentCreateManyInputSchema, LabOrderSponsoredTestConsentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderSponsoredTestConsentCreateManyArgsSchema;
