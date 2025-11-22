import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUpdateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema';
import { TestCatalogVersionCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutBiomarkersInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutBiomarkersInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutBiomarkersInputSchema;
