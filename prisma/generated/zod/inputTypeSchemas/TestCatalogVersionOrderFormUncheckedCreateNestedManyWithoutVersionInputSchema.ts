import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';

export const TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormUncheckedCreateNestedManyWithoutVersionInputSchema;
