import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInputSchema;
