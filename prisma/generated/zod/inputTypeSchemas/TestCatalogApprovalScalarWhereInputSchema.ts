import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumApprovalStatusFilterSchema } from './EnumApprovalStatusFilterSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogApprovalScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogApprovalScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogApprovalScalarWhereInputSchema), z.lazy(() => TestCatalogApprovalScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogApprovalScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogApprovalScalarWhereInputSchema), z.lazy(() => TestCatalogApprovalScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  testConfigurationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  workflowStep: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  stepName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  requiredRole: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumApprovalStatusFilterSchema), z.lazy(() => ApprovalStatusSchema) ]).optional(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  approvedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  approvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogApprovalScalarWhereInputSchema;
