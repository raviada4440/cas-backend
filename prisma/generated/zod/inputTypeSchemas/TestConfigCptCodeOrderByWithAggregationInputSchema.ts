import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestConfigCptCodeCountOrderByAggregateInputSchema } from './TestConfigCptCodeCountOrderByAggregateInputSchema';
import { TestConfigCptCodeMaxOrderByAggregateInputSchema } from './TestConfigCptCodeMaxOrderByAggregateInputSchema';
import { TestConfigCptCodeMinOrderByAggregateInputSchema } from './TestConfigCptCodeMinOrderByAggregateInputSchema';

export const TestConfigCptCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestConfigCptCodeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  cptCode: z.lazy(() => SortOrderSchema).optional(),
  modifier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestConfigCptCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestConfigCptCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestConfigCptCodeMinOrderByAggregateInputSchema).optional(),
});

export default TestConfigCptCodeOrderByWithAggregationInputSchema;
