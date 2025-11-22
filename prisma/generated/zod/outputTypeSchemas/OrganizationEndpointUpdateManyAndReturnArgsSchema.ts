import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointUpdateManyMutationInputSchema } from '../inputTypeSchemas/OrganizationEndpointUpdateManyMutationInputSchema'
import { OrganizationEndpointUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OrganizationEndpointUncheckedUpdateManyInputSchema'
import { OrganizationEndpointWhereInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereInputSchema'

export const OrganizationEndpointUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationEndpointUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationEndpointUpdateManyMutationInputSchema, OrganizationEndpointUncheckedUpdateManyInputSchema ]),
  where: OrganizationEndpointWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default OrganizationEndpointUpdateManyAndReturnArgsSchema;
