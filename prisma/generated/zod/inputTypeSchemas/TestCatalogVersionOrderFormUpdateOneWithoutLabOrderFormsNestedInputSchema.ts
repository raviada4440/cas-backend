import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema';

export const TestCatalogVersionOrderFormUpdateOneWithoutLabOrderFormsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateOneWithoutLabOrderFormsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutLabOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutLabOrderFormsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionOrderFormUpsertWithoutLabOrderFormsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateToOneWithWhereWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutLabOrderFormsInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutLabOrderFormsInputSchema) ]).optional(),
});

export default TestCatalogVersionOrderFormUpdateOneWithoutLabOrderFormsNestedInputSchema;
