import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema';

export const TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutConfigurationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutConfigurationInputSchema;
