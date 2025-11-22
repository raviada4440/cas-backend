import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema } from './TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema';
import { TestCatalogVersionUpsertWithoutBiomarkersInputSchema } from './TestCatalogVersionUpsertWithoutBiomarkersInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInputSchema';
import { TestCatalogVersionUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUpdateWithoutBiomarkersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutBiomarkersNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutBiomarkersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutBiomarkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutBiomarkersInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutBiomarkersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutBiomarkersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutBiomarkersInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutBiomarkersNestedInputSchema;
