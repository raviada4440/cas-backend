import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationCreateManyInputSchema } from '../inputTypeSchemas/ProviderOrganizationCreateManyInputSchema'

export const ProviderOrganizationCreateManyArgsSchema: z.ZodType<Prisma.ProviderOrganizationCreateManyArgs> = z.object({
  data: z.union([ ProviderOrganizationCreateManyInputSchema, ProviderOrganizationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProviderOrganizationCreateManyArgsSchema;
