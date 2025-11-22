import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConsentsInputSchema } from './TestCatalogVersionCreateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema';
import { TestCatalogVersionUpsertWithoutConsentsInputSchema } from './TestCatalogVersionUpsertWithoutConsentsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInputSchema';
import { TestCatalogVersionUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUpdateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConsentsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutConsentsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInputSchema;
