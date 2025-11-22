import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUpdateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInputSchema;
