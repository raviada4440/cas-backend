import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSponsoredTestConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderSponsoredTestConsentWhereInputSchema'

export const LabOrderSponsoredTestConsentDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentDeleteManyArgs> = z.object({
  where: LabOrderSponsoredTestConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderSponsoredTestConsentDeleteManyArgsSchema;
