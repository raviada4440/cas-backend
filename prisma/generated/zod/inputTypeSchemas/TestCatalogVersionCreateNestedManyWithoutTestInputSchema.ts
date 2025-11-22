import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutTestInputSchema } from './TestCatalogVersionCreateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutTestInputSchema } from './TestCatalogVersionUncheckedCreateWithoutTestInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutTestInputSchema } from './TestCatalogVersionCreateOrConnectWithoutTestInputSchema';
import { TestCatalogVersionCreateManyTestInputEnvelopeSchema } from './TestCatalogVersionCreateManyTestInputEnvelopeSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedManyWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedManyWithoutTestInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogVersionCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionCreateManyTestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionCreateNestedManyWithoutTestInputSchema;
