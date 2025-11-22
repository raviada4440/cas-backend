import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneCreateWithoutTestCatalogInputSchema } from './TestGeneCreateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedCreateWithoutTestCatalogInputSchema } from './TestGeneUncheckedCreateWithoutTestCatalogInputSchema';
import { TestGeneCreateOrConnectWithoutTestCatalogInputSchema } from './TestGeneCreateOrConnectWithoutTestCatalogInputSchema';
import { TestGeneCreateManyTestCatalogInputEnvelopeSchema } from './TestGeneCreateManyTestCatalogInputEnvelopeSchema';
import { TestGeneWhereUniqueInputSchema } from './TestGeneWhereUniqueInputSchema';

export const TestGeneUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestGeneUncheckedCreateNestedManyWithoutTestCatalogInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestGeneCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => TestGeneCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestGeneCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestGeneWhereUniqueInputSchema), z.lazy(() => TestGeneWhereUniqueInputSchema).array() ]).optional(),
});

export default TestGeneUncheckedCreateNestedManyWithoutTestCatalogInputSchema;
