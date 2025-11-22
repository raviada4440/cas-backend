import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingSelectSchema } from '../inputTypeSchemas/LabOrderBillingSelectSchema';
import { LabOrderBillingIncludeSchema } from '../inputTypeSchemas/LabOrderBillingIncludeSchema';

export const LabOrderBillingArgsSchema: z.ZodType<Prisma.LabOrderBillingDefaultArgs> = z.object({
  select: z.lazy(() => LabOrderBillingSelectSchema).optional(),
  include: z.lazy(() => LabOrderBillingIncludeSchema).optional(),
}).strict();

export default LabOrderBillingArgsSchema;
