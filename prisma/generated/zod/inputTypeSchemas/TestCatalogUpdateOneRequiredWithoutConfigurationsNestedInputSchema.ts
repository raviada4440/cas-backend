import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutConfigurationsInputSchema } from './TestCatalogCreateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogCreateOrConnectWithoutConfigurationsInputSchema } from './TestCatalogCreateOrConnectWithoutConfigurationsInputSchema';
import { TestCatalogUpsertWithoutConfigurationsInputSchema } from './TestCatalogUpsertWithoutConfigurationsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutConfigurationsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutConfigurationsInputSchema';
import { TestCatalogUpdateWithoutConfigurationsInputSchema } from './TestCatalogUpdateWithoutConfigurationsInputSchema';
import { TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema';

export const TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutConfigurationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutConfigurationsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutConfigurationsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutConfigurationsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneRequiredWithoutConfigurationsNestedInputSchema;
