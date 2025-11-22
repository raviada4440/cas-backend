import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema;
