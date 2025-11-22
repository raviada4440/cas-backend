import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from './TestCatalogVersionCptCodeWhereUniqueInputSchema';

export const TestCatalogVersionCptCodeUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionCptCodeUncheckedCreateNestedManyWithoutVersionInputSchema;
