import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentSelectSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentSelectSchema';
import { LabOrderSponsoredTestConsentIncludeSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentIncludeSchema';

export const LabOrderSponsoredTestConsentArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderSponsoredTestConsentSelectSchema).optional(),
  include: z.lazy(() => LabOrderSponsoredTestConsentIncludeSchema).optional(),
}).strict();

export default LabOrderSponsoredTestConsentArgsSchema;
