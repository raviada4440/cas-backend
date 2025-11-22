import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereInputSchema'
import { LabOrderSponsoredTestConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentOrderByWithRelationInputSchema'
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereUniqueInputSchema'

export const LabOrderSponsoredTestConsentAggregateArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentAggregateArgs> = z.object({
  where: LabOrderSponsoredTestConsentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderSponsoredTestConsentOrderByWithRelationInputSchema.array(), LabOrderSponsoredTestConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderSponsoredTestConsentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderSponsoredTestConsentAggregateArgsSchema;
