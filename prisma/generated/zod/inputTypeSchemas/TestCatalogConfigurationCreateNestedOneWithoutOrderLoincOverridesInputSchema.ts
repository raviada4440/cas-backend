import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutOrderLoincOverridesInputSchema;
