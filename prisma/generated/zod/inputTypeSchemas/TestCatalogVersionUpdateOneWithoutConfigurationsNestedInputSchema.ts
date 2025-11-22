import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema';
import { TestCatalogVersionUpsertWithoutConfigurationsInputSchema } from './TestCatalogVersionUpsertWithoutConfigurationsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInputSchema';
import { TestCatalogVersionUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUpdateWithoutConfigurationsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema';

export const TestCatalogVersionUpdateOneWithoutConfigurationsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneWithoutConfigurationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConfigurationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutConfigurationsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutConfigurationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutConfigurationsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConfigurationsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneWithoutConfigurationsNestedInputSchema;
