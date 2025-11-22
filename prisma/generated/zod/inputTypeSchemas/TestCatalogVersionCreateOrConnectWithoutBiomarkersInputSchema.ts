import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutBiomarkersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema;
