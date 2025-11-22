import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';

export const TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutVersionInputSchema;
