import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointSelectSchema } from '../inputTypeSchemas/OrganizationEndpointSelectSchema';
import { OrganizationEndpointIncludeSchema } from '../inputTypeSchemas/OrganizationEndpointIncludeSchema';

export const OrganizationEndpointArgsSchema: z.ZodType<Prisma.OrganizationEndpointDefaultArgs> = z.object({
  select: z.lazy(() => OrganizationEndpointSelectSchema).optional(),
  include: z.lazy(() => OrganizationEndpointIncludeSchema).optional(),
}).strict();

export default OrganizationEndpointArgsSchema;
