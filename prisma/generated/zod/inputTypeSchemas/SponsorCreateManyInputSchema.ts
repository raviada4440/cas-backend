import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SponsorCreateManyInputSchema: z.ZodType<Prisma.SponsorCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  sponsorName: z.string().optional().nullable(),
  sponsorCode: z.string().optional().nullable(),
  sponsorWebsite: z.string().optional().nullable(),
  sponsorType: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default SponsorCreateManyInputSchema;
