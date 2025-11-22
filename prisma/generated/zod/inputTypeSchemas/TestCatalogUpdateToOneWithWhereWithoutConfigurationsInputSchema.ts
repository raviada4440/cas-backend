import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutConfigurationsInputSchema } from './TestCatalogUpdateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutConfigurationsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutConfigurationsInputSchema;
