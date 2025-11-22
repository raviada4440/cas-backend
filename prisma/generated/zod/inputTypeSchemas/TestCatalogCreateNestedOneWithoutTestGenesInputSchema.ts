import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutTestGenesInputSchema } from './TestCatalogCreateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedCreateWithoutTestGenesInputSchema } from './TestCatalogUncheckedCreateWithoutTestGenesInputSchema';
import { TestCatalogCreateOrConnectWithoutTestGenesInputSchema } from './TestCatalogCreateOrConnectWithoutTestGenesInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutTestGenesInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutTestGenesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutTestGenesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestGenesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutTestGenesInputSchema;
