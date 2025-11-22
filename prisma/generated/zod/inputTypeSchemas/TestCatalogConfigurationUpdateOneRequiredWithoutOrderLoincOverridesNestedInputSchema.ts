import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderLoincOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutOrderLoincOverridesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutOrderLoincOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderLoincOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderLoincOverridesInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInputSchema;
