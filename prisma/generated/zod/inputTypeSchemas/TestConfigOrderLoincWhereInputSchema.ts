import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { LoincScalarRelationFilterSchema } from './LoincScalarRelationFilterSchema';
import { LoincWhereInputSchema } from './LoincWhereInputSchema';

export const TestConfigOrderLoincWhereInputSchema: z.ZodType<Prisma.TestConfigOrderLoincWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigOrderLoincWhereInputSchema), z.lazy(() => TestConfigOrderLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigOrderLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigOrderLoincWhereInputSchema), z.lazy(() => TestConfigOrderLoincWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  loinc: z.union([ z.lazy(() => LoincScalarRelationFilterSchema), z.lazy(() => LoincWhereInputSchema) ]).optional(),
});

export default TestConfigOrderLoincWhereInputSchema;
