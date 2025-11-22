import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProviderCountOutputTypeSelectSchema: z.ZodType<Prisma.ProviderCountOutputTypeSelect> = z.object({
  orderingProviderLabOrders: z.boolean().optional(),
  treatingProviderLabOrders: z.boolean().optional(),
  providerEducation: z.boolean().optional(),
  providerFavoriteTests: z.boolean().optional(),
  providerOrganizations: z.boolean().optional(),
}).strict();

export default ProviderCountOutputTypeSelectSchema;
