import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

export const LabOrderBillingIncludeSchema: z.ZodType<Prisma.LabOrderBillingInclude> = z.object({
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict();

export default LabOrderBillingIncludeSchema;
