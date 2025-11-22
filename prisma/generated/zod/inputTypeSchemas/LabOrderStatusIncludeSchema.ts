import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

export const LabOrderStatusIncludeSchema: z.ZodType<Prisma.LabOrderStatusInclude> = z.object({
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict();

export default LabOrderStatusIncludeSchema;
