import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderOrganizationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProviderOrganizationUpdateManyMutationInputSchema'
import { ProviderOrganizationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProviderOrganizationUncheckedUpdateManyInputSchema'
import { ProviderOrganizationWhereInputSchema } from '../inputTypeSchemas/ProviderOrganizationWhereInputSchema'

export const ProviderOrganizationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProviderOrganizationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProviderOrganizationUpdateManyMutationInputSchema, ProviderOrganizationUncheckedUpdateManyInputSchema ]),
  where: ProviderOrganizationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProviderOrganizationUpdateManyAndReturnArgsSchema;
