import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutTestInputSchema } from './TestCatalogConfigurationCreateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema;
