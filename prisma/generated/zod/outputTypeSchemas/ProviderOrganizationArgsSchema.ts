import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationSelectSchema } from '../inputTypeSchemas/ProviderOrganizationSelectSchema';
import { ProviderOrganizationIncludeSchema } from '../inputTypeSchemas/ProviderOrganizationIncludeSchema';

export const ProviderOrganizationArgsSchema: z.ZodType<Prisma.ProviderOrganizationDefaultArgs> = z.object({
  select: z.lazy(() => ProviderOrganizationSelectSchema).optional(),
  include: z.lazy(() => ProviderOrganizationIncludeSchema).optional(),
}).strict();

export default ProviderOrganizationArgsSchema;
