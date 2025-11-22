import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentSelectSchema } from '../inputTypeSchemas/LabOrderConsentSelectSchema';
import { LabOrderConsentIncludeSchema } from '../inputTypeSchemas/LabOrderConsentIncludeSchema';

export const LabOrderConsentArgsSchema: z.ZodType<Prisma.LabOrderConsentDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderConsentSelectSchema).optional(),
  include: z.lazy(() => LabOrderConsentIncludeSchema).optional(),
}).strict();

export default LabOrderConsentArgsSchema;
