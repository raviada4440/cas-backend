import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SponsoredProgramCreateManyInputSchema: z.ZodType<Prisma.SponsoredProgramCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  sponsorId: z.string().optional().nullable(),
  therapeuticArea: z.string().optional().nullable(),
  programName: z.string().optional().nullable(),
  programUrl: z.string().optional().nullable(),
  programLabUrl: z.string().optional().nullable(),
  sponsoredTestingUrl: z.string().optional().nullable(),
  programEligibility: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default SponsoredProgramCreateManyInputSchema;
