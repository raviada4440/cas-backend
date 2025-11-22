import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema';

export const TestCatalogConfigurationUpdateOneRequiredWithoutBiomarkerOverridesNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneRequiredWithoutBiomarkerOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutBiomarkerOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutBiomarkerOverridesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutBiomarkerOverridesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutBiomarkerOverridesInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutBiomarkerOverridesInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneRequiredWithoutBiomarkerOverridesNestedInputSchema;
