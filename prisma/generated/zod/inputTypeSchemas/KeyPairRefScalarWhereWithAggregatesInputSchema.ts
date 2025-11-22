import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const KeyPairRefScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KeyPairRefScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => KeyPairRefScalarWhereWithAggregatesInputSchema), z.lazy(() => KeyPairRefScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyPairRefScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyPairRefScalarWhereWithAggregatesInputSchema), z.lazy(() => KeyPairRefScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  kid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  alg: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  locator: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default KeyPairRefScalarWhereWithAggregatesInputSchema;
