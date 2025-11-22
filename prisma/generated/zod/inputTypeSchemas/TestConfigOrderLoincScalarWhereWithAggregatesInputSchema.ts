import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestConfigOrderLoincScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestConfigOrderLoincScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigOrderLoincScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigOrderLoincScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigOrderLoincScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  loincCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestConfigOrderLoincScalarWhereWithAggregatesInputSchema;
