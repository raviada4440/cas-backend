import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema } from './TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema';
import { TestConfigOrderLoincWhereInputSchema } from './TestConfigOrderLoincWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { LoincScalarRelationFilterSchema } from './LoincScalarRelationFilterSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const TestConfigOrderLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestConfigOrderLoincWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    configurationId_loincCode: z.lazy(() => TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    configurationId_loincCode: z.lazy(() => TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  configurationId_loincCode: z.lazy(() => TestConfigOrderLoincConfigurationIdLoincCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestConfigOrderLoincWhereInputSchema), z.lazy(() => TestConfigOrderLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigOrderLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigOrderLoincWhereInputSchema), z.lazy(() => TestConfigOrderLoincWhereInputSchema).array() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  loinc: z.union([ z.lazy(() => LoincScalarRelationFilterSchema), z.lazy(() => LoincWhereInputSchema) ]).optional(),
}));

export default TestConfigOrderLoincWhereUniqueInputSchema;
