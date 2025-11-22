import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionBiomarkerListRelationFilterSchema } from './TestCatalogVersionBiomarkerListRelationFilterSchema';
import { TestConfigBiomarkerListRelationFilterSchema } from './TestConfigBiomarkerListRelationFilterSchema';

export const BiomarkerWhereUniqueInputSchema: z.ZodType<Prisma.BiomarkerWhereUniqueInput> = z.union([
  z.object({
    hgncId: z.string(),
    hgncApprovedSymbol: z.string(),
  }),
  z.object({
    hgncId: z.string(),
  }),
  z.object({
    hgncApprovedSymbol: z.string(),
  }),
])
.and(z.strictObject({
  hgncId: z.string().optional(),
  hgncApprovedSymbol: z.string().optional(),
  AND: z.union([ z.lazy(() => BiomarkerWhereInputSchema), z.lazy(() => BiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BiomarkerWhereInputSchema), z.lazy(() => BiomarkerWhereInputSchema).array() ]).optional(),
  hgncStatus: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hgncApprovedName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerListRelationFilterSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerListRelationFilterSchema).optional(),
}));

export default BiomarkerWhereUniqueInputSchema;
