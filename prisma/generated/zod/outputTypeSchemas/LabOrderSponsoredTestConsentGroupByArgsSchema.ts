import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereInputSchema'
import { LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema'
import { LabOrderSponsoredTestConsentScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentScalarFieldEnumSchema'
import { LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema'

export const LabOrderSponsoredTestConsentGroupByArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentGroupByArgs> = z.object({
  where: LabOrderSponsoredTestConsentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema.array(), LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderSponsoredTestConsentScalarFieldEnumSchema.array(), 
  having: LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderSponsoredTestConsentGroupByArgsSchema;
