import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema;
