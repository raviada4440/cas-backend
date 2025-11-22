import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema';
import { TestCatalogVersionUpsertWithoutLabOrdersInputSchema } from './TestCatalogVersionUpsertWithoutLabOrdersInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInputSchema';
import { TestCatalogVersionUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUpdateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInputSchema;
