import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogApprovalWhereInputSchema } from './TestCatalogApprovalWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumApprovalStatusFilterSchema } from './EnumApprovalStatusFilterSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionNullableScalarRelationFilterSchema } from './TestCatalogVersionNullableScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogConfigurationNullableScalarRelationFilterSchema } from './TestCatalogConfigurationNullableScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogApprovalWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogApprovalWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TestCatalogApprovalWhereInputSchema), z.lazy(() => TestCatalogApprovalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogApprovalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogApprovalWhereInputSchema), z.lazy(() => TestCatalogApprovalWhereInputSchema).array() ]).optional(),
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
  version: z.union([ z.lazy(() => TestCatalogVersionNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional().nullable(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional().nullable(),
}));

export default TestCatalogApprovalWhereUniqueInputSchema;
