import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { NestedEnumApprovalStatusWithAggregatesFilterSchema } from './NestedEnumApprovalStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumApprovalStatusFilterSchema } from './NestedEnumApprovalStatusFilterSchema';

export const EnumApprovalStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumApprovalStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ApprovalStatusSchema).optional(),
  in: z.lazy(() => ApprovalStatusSchema).array().optional(),
  notIn: z.lazy(() => ApprovalStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ApprovalStatusSchema), z.lazy(() => NestedEnumApprovalStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumApprovalStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumApprovalStatusFilterSchema).optional(),
});

export default EnumApprovalStatusWithAggregatesFilterSchema;
