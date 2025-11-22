import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SponsorNullableScalarRelationFilterSchema } from './SponsorNullableScalarRelationFilterSchema';
import { SponsorWhereInputSchema } from './SponsorWhereInputSchema';
import { SponsoredTestListRelationFilterSchema } from './SponsoredTestListRelationFilterSchema';

export const SponsoredProgramWhereInputSchema: z.ZodType<Prisma.SponsoredProgramWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SponsoredProgramWhereInputSchema), z.lazy(() => SponsoredProgramWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsoredProgramWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsoredProgramWhereInputSchema), z.lazy(() => SponsoredProgramWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  sponsorId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  therapeuticArea: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  programName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  programUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  programLabUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredTestingUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  programEligibility: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  sponsor: z.union([ z.lazy(() => SponsorNullableScalarRelationFilterSchema), z.lazy(() => SponsorWhereInputSchema) ]).optional().nullable(),
  sponsoredTests: z.lazy(() => SponsoredTestListRelationFilterSchema).optional(),
});

export default SponsoredProgramWhereInputSchema;
