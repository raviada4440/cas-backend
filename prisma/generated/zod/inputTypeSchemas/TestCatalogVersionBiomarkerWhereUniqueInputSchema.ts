import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema } from './TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema';
import { TestCatalogVersionBiomarkerWhereInputSchema } from './TestCatalogVersionBiomarkerWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { BiomarkerScalarRelationFilterSchema } from './BiomarkerScalarRelationFilterSchema';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';

export const TestCatalogVersionBiomarkerWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    versionId_hgncId: z.lazy(() => TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    versionId_hgncId: z.lazy(() => TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  versionId_hgncId: z.lazy(() => TestCatalogVersionBiomarkerVersionIdHgncIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).array() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  biomarker: z.union([ z.lazy(() => BiomarkerScalarRelationFilterSchema), z.lazy(() => BiomarkerWhereInputSchema) ]).optional(),
}));

export default TestCatalogVersionBiomarkerWhereUniqueInputSchema;
