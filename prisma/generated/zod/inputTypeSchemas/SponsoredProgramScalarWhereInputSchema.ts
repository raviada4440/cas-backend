import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SponsoredProgramScalarWhereInputSchema: z.ZodType<Prisma.SponsoredProgramScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SponsoredProgramScalarWhereInputSchema), z.lazy(() => SponsoredProgramScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsoredProgramScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsoredProgramScalarWhereInputSchema), z.lazy(() => SponsoredProgramScalarWhereInputSchema).array() ]).optional(),
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
});

export default SponsoredProgramScalarWhereInputSchema;
