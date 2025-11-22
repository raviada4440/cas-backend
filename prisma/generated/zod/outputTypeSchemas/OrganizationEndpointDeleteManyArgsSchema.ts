import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointWhereInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereInputSchema'

export const OrganizationEndpointDeleteManyArgsSchema: z.ZodType<Prisma.OrganizationEndpointDeleteManyArgs> = z.object({
  where: OrganizationEndpointWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrganizationEndpointDeleteManyArgsSchema;
