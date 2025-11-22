import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormCreateManyInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormCreateManyInputSchema'

export const TestCatalogVersionOrderFormCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestCatalogVersionOrderFormCreateManyInputSchema, TestCatalogVersionOrderFormCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestCatalogVersionOrderFormCreateManyAndReturnArgsSchema;
