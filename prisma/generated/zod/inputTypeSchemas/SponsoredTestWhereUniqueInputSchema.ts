import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderSponsoredTestConsentListRelationFilterSchema } from './LabOrderSponsoredTestConsentListRelationFilterSchema';
import { LabNullableScalarRelationFilterSchema } from './LabNullableScalarRelationFilterSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { SponsoredProgramNullableScalarRelationFilterSchema } from './SponsoredProgramNullableScalarRelationFilterSchema';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';
import { TestCatalogScalarRelationFilterSchema } from './TestCatalogScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const SponsoredTestWhereUniqueInputSchema: z.ZodType<Prisma.SponsoredTestWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    casandraTestId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    casandraTestId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  casandraTestId: z.string().optional(),
  AND: z.union([ z.lazy(() => SponsoredTestWhereInputSchema), z.lazy(() => SponsoredTestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SponsoredTestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SponsoredTestWhereInputSchema), z.lazy(() => SponsoredTestWhereInputSchema).array() ]).optional(),
  testId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredProgramId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentListRelationFilterSchema).optional(),
  lab: z.union([ z.lazy(() => LabNullableScalarRelationFilterSchema), z.lazy(() => LabWhereInputSchema) ]).optional().nullable(),
  sponsoredProgram: z.union([ z.lazy(() => SponsoredProgramNullableScalarRelationFilterSchema), z.lazy(() => SponsoredProgramWhereInputSchema) ]).optional().nullable(),
  testCatalog: z.union([ z.lazy(() => TestCatalogScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}));

export default SponsoredTestWhereUniqueInputSchema;
