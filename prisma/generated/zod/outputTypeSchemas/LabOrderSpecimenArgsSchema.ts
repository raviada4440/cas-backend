import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenSelectSchema } from '../inputTypeSchemas/LabOrderSpecimenSelectSchema';
import { LabOrderSpecimenIncludeSchema } from '../inputTypeSchemas/LabOrderSpecimenIncludeSchema';

export const LabOrderSpecimenArgsSchema: z.ZodType<Prisma.LabOrderSpecimenDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderSpecimenSelectSchema).optional(),
  include: z.lazy(() => LabOrderSpecimenIncludeSchema).optional(),
}).strict();

export default LabOrderSpecimenArgsSchema;
