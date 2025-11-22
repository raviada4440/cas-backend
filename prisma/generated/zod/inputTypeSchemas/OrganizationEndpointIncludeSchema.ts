import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"

export const OrganizationEndpointIncludeSchema: z.ZodType<Prisma.OrganizationEndpointInclude> = z.object({
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict();

export default OrganizationEndpointIncludeSchema;
