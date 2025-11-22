import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema } from './TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema';
import { TestCatalogVersionResultLoincWhereInputSchema } from './TestCatalogVersionResultLoincWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { LoincScalarRelationFilterSchema } from './LoincScalarRelationFilterSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const TestCatalogVersionResultLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    versionId_loincCode: z.lazy(() => TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    versionId_loincCode: z.lazy(() => TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  versionId_loincCode: z.lazy(() => TestCatalogVersionResultLoincVersionIdLoincCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).array() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  resultCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  uom: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  loinc: z.union([ z.lazy(() => LoincScalarRelationFilterSchema), z.lazy(() => LoincWhereInputSchema) ]).optional(),
}));

export default TestCatalogVersionResultLoincWhereUniqueInputSchema;
