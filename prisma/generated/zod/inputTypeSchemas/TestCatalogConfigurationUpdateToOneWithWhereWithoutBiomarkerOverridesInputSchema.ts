import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInputSchema;
