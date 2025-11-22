import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionBiomarkerListRelationFilterSchema } from './TestCatalogVersionBiomarkerListRelationFilterSchema';
import { TestConfigBiomarkerListRelationFilterSchema } from './TestConfigBiomarkerListRelationFilterSchema';

export const BiomarkerWhereInputSchema: z.ZodType<Prisma.BiomarkerWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BiomarkerWhereInputSchema), z.lazy(() => BiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BiomarkerWhereInputSchema), z.lazy(() => BiomarkerWhereInputSchema).array() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  hgncStatus: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hgncApprovedSymbol: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hgncApprovedName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerListRelationFilterSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerListRelationFilterSchema).optional(),
});

export default BiomarkerWhereInputSchema;
