import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';
import { NestedEnumAuditActionFilterSchema } from './NestedEnumAuditActionFilterSchema';

export const EnumAuditActionFilterSchema: z.ZodType<Prisma.EnumAuditActionFilter> = z.strictObject({
  equals: z.lazy(() => AuditActionSchema).optional(),
  in: z.lazy(() => AuditActionSchema).array().optional(),
  notIn: z.lazy(() => AuditActionSchema).array().optional(),
  not: z.union([ z.lazy(() => AuditActionSchema), z.lazy(() => NestedEnumAuditActionFilterSchema) ]).optional(),
});

export default EnumAuditActionFilterSchema;
