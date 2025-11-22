import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProviderCreateManyInputSchema: z.ZodType<Prisma.ProviderCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  href: z.string().optional().nullable(),
  npi: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  credentials: z.string().optional().nullable(),
  specialty: z.string().optional().nullable(),
  aboutme: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  providerType: z.string().optional().nullable(),
  affiliation: z.string().optional().nullable(),
  proceduresAndResearch: z.string().optional().nullable(),
  specialInterests: z.string().optional().nullable(),
  userAttributeId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ProviderCreateManyInputSchema;
