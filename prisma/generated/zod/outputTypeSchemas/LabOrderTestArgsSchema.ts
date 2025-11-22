import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestSelectSchema } from '../inputTypeSchemas/LabOrderTestSelectSchema';
import { LabOrderTestIncludeSchema } from '../inputTypeSchemas/LabOrderTestIncludeSchema';

export const LabOrderTestArgsSchema: z.ZodType<Prisma.LabOrderTestDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderTestSelectSchema).optional(),
  include: z.lazy(() => LabOrderTestIncludeSchema).optional(),
}).strict();

export default LabOrderTestArgsSchema;
