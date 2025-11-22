import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';

export const TestCatalogVersionOrderLoincUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderLoincUncheckedCreateNestedManyWithoutVersionInputSchema;
