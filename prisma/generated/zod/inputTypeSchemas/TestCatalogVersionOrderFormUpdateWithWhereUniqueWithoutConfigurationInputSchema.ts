import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema';

export const TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutConfigurationInputSchema;
