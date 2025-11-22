import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrganizationCountOutputTypeSelectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = z.object({
  labOrders: z.boolean().optional(),
  organizationFavoriteTests: z.boolean().optional(),
  patientOrganizations: z.boolean().optional(),
  providerOrganizations: z.boolean().optional(),
  organizationEndpoints: z.boolean().optional(),
  userIdentities: z.boolean().optional(),
  orderFormSections: z.boolean().optional(),
  orderFormTemplates: z.boolean().optional(),
}).strict();

export default OrganizationCountOutputTypeSelectSchema;
