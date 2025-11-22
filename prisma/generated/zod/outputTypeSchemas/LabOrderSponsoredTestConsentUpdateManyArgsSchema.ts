import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentUpdateManyMutationInputSchema'
import { LabOrderSponsoredTestConsentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentUncheckedUpdateManyInputSchema'
import { LabOrderSponsoredTestConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereInputSchema'

export const LabOrderSponsoredTestConsentUpdateManyArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUpdateManyArgs> = z.object({
  data: z.union([ LabOrderSponsoredTestConsentUpdateManyMutationInputSchema, LabOrderSponsoredTestConsentUncheckedUpdateManyInputSchema ]),
  where: LabOrderSponsoredTestConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderSponsoredTestConsentUpdateManyArgsSchema;
