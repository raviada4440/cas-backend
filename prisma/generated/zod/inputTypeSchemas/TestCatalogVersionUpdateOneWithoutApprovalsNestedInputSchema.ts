import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutApprovalsInputSchema } from './TestCatalogVersionCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema';
import { TestCatalogVersionUpsertWithoutApprovalsInputSchema } from './TestCatalogVersionUpsertWithoutApprovalsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInputSchema';
import { TestCatalogVersionUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUpdateWithoutApprovalsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema';

export const TestCatalogVersionUpdateOneWithoutApprovalsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneWithoutApprovalsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutApprovalsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutApprovalsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutApprovalsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutApprovalsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneWithoutApprovalsNestedInputSchema;
