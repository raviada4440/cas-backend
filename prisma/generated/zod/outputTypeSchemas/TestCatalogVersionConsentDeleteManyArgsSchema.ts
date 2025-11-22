import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionConsentWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionConsentWhereInputSchema'

export const TestCatalogVersionConsentDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionConsentDeleteManyArgs> = z.object({
  where: TestCatalogVersionConsentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestCatalogVersionConsentDeleteManyArgsSchema;
