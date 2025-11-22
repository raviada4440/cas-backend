import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema;
