import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutSpecimensInputSchema } from './TestCatalogVersionCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema } from './TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema';
import { TestCatalogVersionUpsertWithoutSpecimensInputSchema } from './TestCatalogVersionUpsertWithoutSpecimensInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInputSchema';
import { TestCatalogVersionUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUpdateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutSpecimensNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutSpecimensNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutSpecimensInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutSpecimensNestedInputSchema;
