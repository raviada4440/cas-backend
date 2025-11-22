import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentUpdateManyMutationInputSchema'
import { TestCatalogVersionConsentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentUncheckedUpdateManyInputSchema'
import { TestCatalogVersionConsentWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereInputSchema'

export const TestCatalogVersionConsentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionConsentUpdateManyMutationInputSchema, TestCatalogVersionConsentUncheckedUpdateManyInputSchema ]),
  where: TestCatalogVersionConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionConsentUpdateManyAndReturnArgsSchema;
