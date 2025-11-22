import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ApprovalStatusSchema } from './ApprovalStatusSchema';
import { EnumApprovalStatusFieldUpdateOperationsInputSchema } from './EnumApprovalStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneWithoutApprovalsNestedInputSchema } from './TestCatalogVersionUpdateOneWithoutApprovalsNestedInputSchema';
import { TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInputSchema } from './TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInputSchema';

export const TestCatalogApprovalUpdateInputSchema: z.ZodType<Prisma.TestCatalogApprovalUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  workflowStep: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  stepName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requiredRole: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => ApprovalStatusSchema), z.lazy(() => EnumApprovalStatusFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approvedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  approvedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneWithoutApprovalsNestedInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneWithoutApprovalsNestedInputSchema).optional(),
});

export default TestCatalogApprovalUpdateInputSchema;
