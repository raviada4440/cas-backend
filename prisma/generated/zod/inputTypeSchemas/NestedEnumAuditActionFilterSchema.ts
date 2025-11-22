import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';

export const NestedEnumAuditActionFilterSchema: z.ZodType<Prisma.NestedEnumAuditActionFilter> = z.strictObject({
  equals: z.lazy(() => AuditActionSchema).optional(),
  in: z.lazy(() => AuditActionSchema).array().optional(),
  notIn: z.lazy(() => AuditActionSchema).array().optional(),
  not: z.union([ z.lazy(() => AuditActionSchema), z.lazy(() => NestedEnumAuditActionFilterSchema) ]).optional(),
});

export default NestedEnumAuditActionFilterSchema;
