import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LabOrderCountOutputTypeSelectSchema: z.ZodType<Prisma.LabOrderCountOutputTypeSelect> = z.object({
  labOrderAttachments: z.boolean().optional(),
  labOrderBilling: z.boolean().optional(),
  labOrderIcds: z.boolean().optional(),
  labOrderSpecimens: z.boolean().optional(),
  labOrderSponsoredTestConsents: z.boolean().optional(),
  labOrderStatuses: z.boolean().optional(),
  labOrderTests: z.boolean().optional(),
  consents: z.boolean().optional(),
  orderForms: z.boolean().optional(),
}).strict();

export default LabOrderCountOutputTypeSelectSchema;
