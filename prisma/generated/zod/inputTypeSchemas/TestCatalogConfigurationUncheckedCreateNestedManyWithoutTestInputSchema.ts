import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutTestInputSchema } from './TestCatalogConfigurationCreateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema';
import { TestCatalogConfigurationCreateManyTestInputEnvelopeSchema } from './TestCatalogConfigurationCreateManyTestInputEnvelopeSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogConfigurationCreateManyTestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogConfigurationUncheckedCreateNestedManyWithoutTestInputSchema;
