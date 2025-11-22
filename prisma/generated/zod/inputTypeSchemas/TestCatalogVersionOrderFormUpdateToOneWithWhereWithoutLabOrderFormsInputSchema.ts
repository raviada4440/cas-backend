import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema';

export const TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInputSchema;
