import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestArgsSchema } from "../outputTypeSchemas/SponsoredTestArgsSchema"
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

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

export default LabOrderSponsoredTestConsentSelectSchema;
