import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationScalarWhereInputSchema } from './TestCatalogConfigurationScalarWhereInputSchema';
import { TestCatalogConfigurationUpdateManyMutationInputSchema } from './TestCatalogConfigurationUpdateManyMutationInputSchema';
import { TestCatalogConfigurationUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateManyMutationInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema;
