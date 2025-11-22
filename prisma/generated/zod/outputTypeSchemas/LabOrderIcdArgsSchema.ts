import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdSelectSchema } from '../inputTypeSchemas/LabOrderIcdSelectSchema';
import { LabOrderIcdIncludeSchema } from '../inputTypeSchemas/LabOrderIcdIncludeSchema';

export const LabOrderIcdArgsSchema: z.ZodType<Prisma.LabOrderIcdDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderIcdSelectSchema).optional(),
  include: z.lazy(() => LabOrderIcdIncludeSchema).optional(),
}).strict();

export default LabOrderIcdArgsSchema;
