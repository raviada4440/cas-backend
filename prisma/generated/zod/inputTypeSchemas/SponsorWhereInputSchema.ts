import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SponsoredProgramListRelationFilterSchema } from './SponsoredProgramListRelationFilterSchema';

export const SponsorWhereInputSchema: z.ZodType<Prisma.SponsorWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SponsorWhereInputSchema), z.lazy(() => SponsorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsorWhereInputSchema), z.lazy(() => SponsorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  sponsorName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsorCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsorWebsite: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsorType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  zip: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  sponsoredPrograms: z.lazy(() => SponsoredProgramListRelationFilterSchema).optional(),
});

export default SponsorWhereInputSchema;
