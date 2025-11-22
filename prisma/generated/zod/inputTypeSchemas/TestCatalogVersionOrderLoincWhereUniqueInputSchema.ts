import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema } from './TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema';
import { TestCatalogVersionOrderLoincWhereInputSchema } from './TestCatalogVersionOrderLoincWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { LoincScalarRelationFilterSchema } from './LoincScalarRelationFilterSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const TestCatalogVersionOrderLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    versionId_loincCode: z.lazy(() => TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    versionId_loincCode: z.lazy(() => TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  versionId_loincCode: z.lazy(() => TestCatalogVersionOrderLoincVersionIdLoincCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).array() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  loinc: z.union([ z.lazy(() => LoincScalarRelationFilterSchema), z.lazy(() => LoincWhereInputSchema) ]).optional(),
}));

export default TestCatalogVersionOrderLoincWhereUniqueInputSchema;
