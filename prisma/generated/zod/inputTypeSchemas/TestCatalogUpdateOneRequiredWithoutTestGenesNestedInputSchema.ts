import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutTestGenesInputSchema } from './TestCatalogCreateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedCreateWithoutTestGenesInputSchema } from './TestCatalogUncheckedCreateWithoutTestGenesInputSchema';
import { TestCatalogCreateOrConnectWithoutTestGenesInputSchema } from './TestCatalogCreateOrConnectWithoutTestGenesInputSchema';
import { TestCatalogUpsertWithoutTestGenesInputSchema } from './TestCatalogUpsertWithoutTestGenesInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutTestGenesInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutTestGenesInputSchema';
import { TestCatalogUpdateWithoutTestGenesInputSchema } from './TestCatalogUpdateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedUpdateWithoutTestGenesInputSchema } from './TestCatalogUncheckedUpdateWithoutTestGenesInputSchema';

export const TestCatalogUpdateOneRequiredWithoutTestGenesNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutTestGenesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutTestGenesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestGenesInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutTestGenesInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUpdateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutTestGenesInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneRequiredWithoutTestGenesNestedInputSchema;
