import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUpdateWithoutCptCodesInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutCptCodesInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutCptCodesInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutCptCodesInputSchema;
