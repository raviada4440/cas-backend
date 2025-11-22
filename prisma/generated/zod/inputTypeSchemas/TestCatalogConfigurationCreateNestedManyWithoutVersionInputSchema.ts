import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutVersionInputSchema } from './TestCatalogConfigurationCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema } from './TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogConfigurationCreateNestedManyWithoutVersionInputSchema;
