import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSelectSchema } from '../inputTypeSchemas/LabOrderSelectSchema';
import { LabOrderIncludeSchema } from '../inputTypeSchemas/LabOrderIncludeSchema';

export const LabOrderArgsSchema: z.ZodType<Prisma.LabOrderDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderSelectSchema).optional(),
  include: z.lazy(() => LabOrderIncludeSchema).optional(),
}).strict();

export default LabOrderArgsSchema;
