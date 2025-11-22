import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { NestedEnumApprovalStatusFilterSchema } from './NestedEnumApprovalStatusFilterSchema';

export const EnumApprovalStatusFilterSchema: z.ZodType<Prisma.EnumApprovalStatusFilter> = z.strictObject({
  equals: z.lazy(() => ApprovalStatusSchema).optional(),
  in: z.lazy(() => ApprovalStatusSchema).array().optional(),
  notIn: z.lazy(() => ApprovalStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ApprovalStatusSchema), z.lazy(() => NestedEnumApprovalStatusFilterSchema) ]).optional(),
});

export default EnumApprovalStatusFilterSchema;
