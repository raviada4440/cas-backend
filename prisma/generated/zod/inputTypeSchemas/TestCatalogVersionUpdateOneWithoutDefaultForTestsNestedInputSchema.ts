import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUpsertWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUpsertWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema';

export const TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutDefaultForTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutDefaultForTestsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneWithoutDefaultForTestsNestedInputSchema;
