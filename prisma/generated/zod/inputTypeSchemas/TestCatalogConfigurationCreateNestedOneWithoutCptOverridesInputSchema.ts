import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutCptOverridesInputSchema;
