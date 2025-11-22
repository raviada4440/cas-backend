import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUpdateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInputSchema;
