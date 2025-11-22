import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';
import { TestCatalogVersionOrderFormUpdateManyMutationInputSchema } from './TestCatalogVersionOrderFormUpdateManyMutationInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateManyWithWhereWithoutConfigurationInputSchema;
