import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithoutVersionInputSchema } from './TestCatalogConfigurationUpdateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogConfigurationCreateWithoutVersionInputSchema } from './TestCatalogConfigurationCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema;
