import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUpdateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema';
import { TestCatalogVersionCreateWithoutCptCodesInputSchema } from './TestCatalogVersionCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutCptCodesInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutCptCodesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutCptCodesInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutCptCodesInputSchema;
