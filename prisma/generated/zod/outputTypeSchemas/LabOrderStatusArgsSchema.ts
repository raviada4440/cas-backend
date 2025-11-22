import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusSelectSchema } from '../inputTypeSchemas/LabOrderStatusSelectSchema';
import { LabOrderStatusIncludeSchema } from '../inputTypeSchemas/LabOrderStatusIncludeSchema';

export const LabOrderStatusArgsSchema: z.ZodType<Prisma.LabOrderStatusDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderStatusSelectSchema).optional(),
  include: z.lazy(() => LabOrderStatusIncludeSchema).optional(),
}).strict();

export default LabOrderStatusArgsSchema;
