import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KeyPairRefWhereInputSchema } from './KeyPairRefWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const KeyPairRefWhereUniqueInputSchema: z.ZodType<Prisma.KeyPairRefWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    kid: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    kid: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  kid: z.string().optional(),
  AND: z.union([ z.lazy(() => KeyPairRefWhereInputSchema), z.lazy(() => KeyPairRefWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => KeyPairRefWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => KeyPairRefWhereInputSchema), z.lazy(() => KeyPairRefWhereInputSchema).array() ]).optional(),
  alg: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  locator: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
}));

export default KeyPairRefWhereUniqueInputSchema;
