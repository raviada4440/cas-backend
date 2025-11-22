import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';
import { NestedEnumAuditActionWithAggregatesFilterSchema } from './NestedEnumAuditActionWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAuditActionFilterSchema } from './NestedEnumAuditActionFilterSchema';

export const EnumAuditActionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAuditActionWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AuditActionSchema).optional(),
  in: z.lazy(() => AuditActionSchema).array().optional(),
  notIn: z.lazy(() => AuditActionSchema).array().optional(),
  not: z.union([ z.lazy(() => AuditActionSchema), z.lazy(() => NestedEnumAuditActionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditActionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditActionFilterSchema).optional(),
});

export default EnumAuditActionWithAggregatesFilterSchema;
