import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutBiomarkerOverridesInputSchema;
