import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

export const LabOrderStatusSelectSchema: z.ZodType<Prisma.LabOrderStatusSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  status: z.boolean().optional(),
  statusDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export default LabOrderStatusSelectSchema;
