import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutConfigurationsInputSchema } from './TestCatalogUpdateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema';
import { TestCatalogCreateWithoutConfigurationsInputSchema } from './TestCatalogCreateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutConfigurationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConfigurationsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutConfigurationsInputSchema;
