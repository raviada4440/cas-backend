import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationWhereInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereInputSchema'

export const ProviderOrganizationDeleteManyArgsSchema: z.ZodType<Prisma.ProviderOrganizationDeleteManyArgs> = z.object({
  where: ProviderOrganizationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderOrganizationDeleteManyArgsSchema;
