import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutCptOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutCptOverridesInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutCptOverridesInputSchema;
