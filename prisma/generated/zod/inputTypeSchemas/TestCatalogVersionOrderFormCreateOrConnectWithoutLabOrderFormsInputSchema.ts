import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema';

export const TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema) ]),
});

export default TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema;
