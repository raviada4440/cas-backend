import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutApprovalsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutApprovalsInputSchema;
