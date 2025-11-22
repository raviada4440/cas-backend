import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const KeyPairRefWhereInputSchema: z.ZodType<Prisma.KeyPairRefWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => KeyPairRefWhereInputSchema), z.lazy(() => KeyPairRefWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyPairRefWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyPairRefWhereInputSchema), z.lazy(() => KeyPairRefWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  kid: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  alg: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  locator: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default KeyPairRefWhereInputSchema;
