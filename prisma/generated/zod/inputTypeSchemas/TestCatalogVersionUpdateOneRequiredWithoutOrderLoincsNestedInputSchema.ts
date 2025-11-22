import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUpsertWithoutOrderLoincsInputSchema } from './TestCatalogVersionUpsertWithoutOrderLoincsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUpdateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutOrderLoincsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutOrderLoincsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema;
