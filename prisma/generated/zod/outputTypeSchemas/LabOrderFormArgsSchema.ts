import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormSelectSchema } from '../inputTypeSchemas/LabOrderFormSelectSchema';
import { LabOrderFormIncludeSchema } from '../inputTypeSchemas/LabOrderFormIncludeSchema';

export const LabOrderFormArgsSchema: z.ZodType<Prisma.LabOrderFormDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderFormSelectSchema).optional(),
  include: z.lazy(() => LabOrderFormIncludeSchema).optional(),
}).strict();

export default LabOrderFormArgsSchema;
