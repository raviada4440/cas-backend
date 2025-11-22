import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutApprovalsInputSchema } from './TestCatalogVersionCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutApprovalsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema;
