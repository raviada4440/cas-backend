import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutCptCodesInputSchema } from './TestCatalogVersionCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema } from './TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema';
import { TestCatalogVersionUpsertWithoutCptCodesInputSchema } from './TestCatalogVersionUpsertWithoutCptCodesInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInputSchema';
import { TestCatalogVersionUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUpdateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutCptCodesNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutCptCodesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutCptCodesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutCptCodesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutCptCodesNestedInputSchema;
