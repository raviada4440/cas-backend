import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUpdateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutApprovalsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutApprovalsInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutApprovalsInputSchema;
