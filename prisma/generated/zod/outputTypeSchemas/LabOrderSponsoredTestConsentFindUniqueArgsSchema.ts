import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentIncludeSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentIncludeSchema'
import { LabOrderSponsoredTestConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereUniqueInputSchema'
import { SponsoredTestArgsSchema } from "../outputTypeSchemas/SponsoredTestArgsSchema"
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderSponsoredTestConsentSelectSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  sponsoredCasandraTestId: z.boolean().optional(),
  providerName: z.boolean().optional(),
  providerNpi: z.boolean().optional(),
  consentAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sponsoredTest: z.union([z.boolean(),z.lazy(() => SponsoredTestArgsSchema)]).optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export const LabOrderSponsoredTestConsentFindUniqueArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentFindUniqueArgs> = z.object({
  select: LabOrderSponsoredTestConsentSelectSchema.optional(),
  include: z.lazy(() => LabOrderSponsoredTestConsentIncludeSchema).optional(),
  where: LabOrderSponsoredTestConsentWhereUniqueInputSchema, 
}).strict();

export default LabOrderSponsoredTestConsentFindUniqueArgsSchema;
