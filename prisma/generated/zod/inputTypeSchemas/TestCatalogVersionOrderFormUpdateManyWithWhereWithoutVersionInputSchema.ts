import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';
import { TestCatalogVersionOrderFormUpdateManyMutationInputSchema } from './TestCatalogVersionOrderFormUpdateManyMutationInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema;
