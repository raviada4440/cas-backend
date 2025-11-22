import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutApprovalsInputSchema } from './TestCatalogVersionCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutApprovalsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutApprovalsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutApprovalsInputSchema;
