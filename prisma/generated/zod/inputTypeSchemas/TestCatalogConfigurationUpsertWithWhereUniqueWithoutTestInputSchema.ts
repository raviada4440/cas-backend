import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithoutTestInputSchema } from './TestCatalogConfigurationUpdateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema';
import { TestCatalogConfigurationCreateWithoutTestInputSchema } from './TestCatalogConfigurationCreateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema';

export const TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutTestInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema;
