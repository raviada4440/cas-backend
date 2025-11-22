import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';

export const TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema;
