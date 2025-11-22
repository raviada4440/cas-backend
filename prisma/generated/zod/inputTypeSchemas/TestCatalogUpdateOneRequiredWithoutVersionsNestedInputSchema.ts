import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutVersionsInputSchema } from './TestCatalogCreateWithoutVersionsInputSchema';
import { TestCatalogUncheckedCreateWithoutVersionsInputSchema } from './TestCatalogUncheckedCreateWithoutVersionsInputSchema';
import { TestCatalogCreateOrConnectWithoutVersionsInputSchema } from './TestCatalogCreateOrConnectWithoutVersionsInputSchema';
import { TestCatalogUpsertWithoutVersionsInputSchema } from './TestCatalogUpsertWithoutVersionsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutVersionsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutVersionsInputSchema';
import { TestCatalogUpdateWithoutVersionsInputSchema } from './TestCatalogUpdateWithoutVersionsInputSchema';
import { TestCatalogUncheckedUpdateWithoutVersionsInputSchema } from './TestCatalogUncheckedUpdateWithoutVersionsInputSchema';

export const TestCatalogUpdateOneRequiredWithoutVersionsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutVersionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutVersionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutVersionsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutVersionsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutVersionsInputSchema), z.lazy(() => TestCatalogUpdateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutVersionsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneRequiredWithoutVersionsNestedInputSchema;
