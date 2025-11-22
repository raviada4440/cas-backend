import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProviderEducationCreateManyInputSchema: z.ZodType<Prisma.ProviderEducationCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  providerId: z.string(),
  providerNpi: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  educationType: z.string().optional().nullable(),
  schoolName: z.string().optional().nullable(),
  areaOfEducation: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ProviderEducationCreateManyInputSchema;
