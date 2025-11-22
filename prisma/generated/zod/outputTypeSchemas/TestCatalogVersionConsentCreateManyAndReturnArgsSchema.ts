import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentCreateManyInputSchema'

export const TestCatalogVersionConsentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionConsentCreateManyInputSchema, TestCatalogVersionConsentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionConsentCreateManyAndReturnArgsSchema;
