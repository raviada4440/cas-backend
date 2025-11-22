import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';

export const TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional(),
});

export default TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInputSchema;
