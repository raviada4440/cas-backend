import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUpsertWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUpsertWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutResultLoincOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutResultLoincOverridesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutResultLoincOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutResultLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutResultLoincOverridesInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInputSchema;
