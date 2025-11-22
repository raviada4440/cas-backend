import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SponsoredTestArgsSchema } from "../outputTypeSchemas/SponsoredTestArgsSchema"
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

export const LabOrderSponsoredTestConsentIncludeSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentInclude> = z.object({
  sponsoredTest: z.union([z.boolean(),z.lazy(() => SponsoredTestArgsSchema)]).optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict();

export default LabOrderSponsoredTestConsentIncludeSchema;
