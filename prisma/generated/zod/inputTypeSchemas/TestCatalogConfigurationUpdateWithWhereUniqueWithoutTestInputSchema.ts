import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithoutTestInputSchema } from './TestCatalogConfigurationUpdateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema';

export const TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema) ]),
});

export default TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema;
