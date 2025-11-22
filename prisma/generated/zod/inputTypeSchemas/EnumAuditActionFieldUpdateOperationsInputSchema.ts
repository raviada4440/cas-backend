import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';

export const EnumAuditActionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAuditActionFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AuditActionSchema).optional(),
});

export default EnumAuditActionFieldUpdateOperationsInputSchema;
