import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema';
import { TestCatalogVersionUpsertWithoutResultLoincsInputSchema } from './TestCatalogVersionUpsertWithoutResultLoincsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInputSchema';
import { TestCatalogVersionUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUpdateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutResultLoincsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutResultLoincsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutResultLoincsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutResultLoincsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutResultLoincsNestedInputSchema;
