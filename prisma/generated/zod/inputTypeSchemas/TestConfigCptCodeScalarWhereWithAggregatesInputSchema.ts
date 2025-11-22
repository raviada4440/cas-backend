import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestConfigCptCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestConfigCptCodeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigCptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigCptCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigCptCodeScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  cptCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  modifier: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  isPrimary: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestConfigCptCodeScalarWhereWithAggregatesInputSchema;
