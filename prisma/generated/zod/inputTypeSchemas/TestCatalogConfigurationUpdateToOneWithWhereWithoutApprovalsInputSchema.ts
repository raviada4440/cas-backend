import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUpdateWithoutApprovalsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutApprovalsInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutApprovalsInputSchema;
