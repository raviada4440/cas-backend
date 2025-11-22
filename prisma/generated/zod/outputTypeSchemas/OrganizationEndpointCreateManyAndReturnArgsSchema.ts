import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointCreateManyInputSchema } from '../inputTypeSchemas/OrganizationEndpointCreateManyInputSchema'

export const OrganizationEndpointCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationEndpointCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationEndpointCreateManyInputSchema, OrganizationEndpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OrganizationEndpointCreateManyAndReturnArgsSchema;
