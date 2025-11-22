import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationFavoriteTestCreateManyInputSchema } from '../inputTypeSchemas/OrganizationFavoriteTestCreateManyInputSchema'

export const OrganizationFavoriteTestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrganizationFavoriteTestCreateManyInputSchema, OrganizationFavoriteTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default OrganizationFavoriteTestCreateManyAndReturnArgsSchema;
