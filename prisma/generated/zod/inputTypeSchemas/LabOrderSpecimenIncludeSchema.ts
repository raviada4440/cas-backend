import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"

export const LabOrderSpecimenIncludeSchema: z.ZodType<Prisma.LabOrderSpecimenInclude> = z.object({
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict();

export default LabOrderSpecimenIncludeSchema;
