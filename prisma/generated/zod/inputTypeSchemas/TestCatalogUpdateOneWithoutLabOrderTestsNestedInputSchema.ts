import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutLabOrderTestsInputSchema } from './TestCatalogCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema } from './TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema';
import { TestCatalogUpsertWithoutLabOrderTestsInputSchema } from './TestCatalogUpsertWithoutLabOrderTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInputSchema';
import { TestCatalogUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUpdateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema';

export const TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneWithoutLabOrderTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutLabOrderTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema;
