import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestConfigCptCodeWhereInputSchema: z.ZodType<Prisma.TestConfigCptCodeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigCptCodeWhereInputSchema), z.lazy(() => TestConfigCptCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigCptCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigCptCodeWhereInputSchema), z.lazy(() => TestConfigCptCodeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  cptCode: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  modifier: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
});

export default TestConfigCptCodeWhereInputSchema;
