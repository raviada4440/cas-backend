import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUpdateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema';
import { TestCatalogVersionCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutConfigurationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutConfigurationsInputSchema;
