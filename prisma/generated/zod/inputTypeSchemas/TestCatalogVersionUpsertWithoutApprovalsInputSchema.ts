import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUpdateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema';
import { TestCatalogVersionCreateWithoutApprovalsInputSchema } from './TestCatalogVersionCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutApprovalsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutApprovalsInputSchema;
