import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { IcdArgsSchema } from "../outputTypeSchemas/IcdArgsSchema"

export const LabOrderIcdSelectSchema: z.ZodType<Prisma.LabOrderIcdSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  icdId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  icd: z.union([z.boolean(),z.lazy(() => IcdArgsSchema)]).optional(),
}).strict()

export default LabOrderIcdSelectSchema;
