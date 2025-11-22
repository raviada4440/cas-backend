import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationScalarWhereInputSchema } from './TestCatalogConfigurationScalarWhereInputSchema';
import { TestCatalogConfigurationUpdateManyMutationInputSchema } from './TestCatalogConfigurationUpdateManyMutationInputSchema';
import { TestCatalogConfigurationUncheckedUpdateManyWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedUpdateManyWithoutTestInputSchema';

export const TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateManyWithWhereWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateManyMutationInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateManyWithoutTestInputSchema) ]),
});

export default TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema;
