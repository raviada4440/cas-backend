import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUpsertWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUpsertWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutCptOverridesNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutCptOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutCptOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutCptOverridesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutCptOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutCptOverridesNestedInputSchema;
