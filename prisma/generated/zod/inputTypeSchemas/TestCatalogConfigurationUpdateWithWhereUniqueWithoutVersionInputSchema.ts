import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithoutVersionInputSchema } from './TestCatalogConfigurationUpdateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema;
