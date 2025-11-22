import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUpdateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInputSchema;
