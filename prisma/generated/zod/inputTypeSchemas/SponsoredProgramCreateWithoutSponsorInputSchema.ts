import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateNestedManyWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateNestedManyWithoutSponsoredProgramInputSchema';

export const SponsoredProgramCreateWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramCreateWithoutSponsorInput> = z.strictObject({
  id: z.string().optional(),
  therapeuticArea: z.string().optional().nullable(),
  programName: z.string().optional().nullable(),
  programUrl: z.string().optional().nullable(),
  programLabUrl: z.string().optional().nullable(),
  sponsoredTestingUrl: z.string().optional().nullable(),
  programEligibility: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  sponsoredTests: z.lazy(() => SponsoredTestCreateNestedManyWithoutSponsoredProgramInputSchema).optional(),
});

export default SponsoredProgramCreateWithoutSponsorInputSchema;
