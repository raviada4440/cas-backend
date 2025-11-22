import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema } from './TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema';
import { TestConfigResultLoincWhereInputSchema } from './TestConfigResultLoincWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { LoincScalarRelationFilterSchema } from './LoincScalarRelationFilterSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const TestConfigResultLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestConfigResultLoincWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    configurationId_loincCode: z.lazy(() => TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    configurationId_loincCode: z.lazy(() => TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  configurationId_loincCode: z.lazy(() => TestConfigResultLoincConfigurationIdLoincCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestConfigResultLoincWhereInputSchema), z.lazy(() => TestConfigResultLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigResultLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigResultLoincWhereInputSchema), z.lazy(() => TestConfigResultLoincWhereInputSchema).array() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  resultCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  resultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  uom: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  loinc: z.union([ z.lazy(() => LoincScalarRelationFilterSchema), z.lazy(() => LoincWhereInputSchema) ]).optional(),
}));

export default TestConfigResultLoincWhereUniqueInputSchema;
