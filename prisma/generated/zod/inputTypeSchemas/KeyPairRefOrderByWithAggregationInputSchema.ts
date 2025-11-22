import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { KeyPairRefCountOrderByAggregateInputSchema } from './KeyPairRefCountOrderByAggregateInputSchema';
import { KeyPairRefMaxOrderByAggregateInputSchema } from './KeyPairRefMaxOrderByAggregateInputSchema';
import { KeyPairRefMinOrderByAggregateInputSchema } from './KeyPairRefMinOrderByAggregateInputSchema';

export const KeyPairRefOrderByWithAggregationInputSchema: z.ZodType<Prisma.KeyPairRefOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  kid: z.lazy(() => SortOrderSchema).optional(),
  alg: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  locator: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => KeyPairRefCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KeyPairRefMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KeyPairRefMinOrderByAggregateInputSchema).optional(),
});

export default KeyPairRefOrderByWithAggregationInputSchema;
