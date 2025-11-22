import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutBiomarkersInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutBiomarkersInputSchema;
