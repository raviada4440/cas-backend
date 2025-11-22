import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutSponsoredTestsInputSchema } from './TestCatalogCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema } from './TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema';
import { TestCatalogUpsertWithoutSponsoredTestsInputSchema } from './TestCatalogUpsertWithoutSponsoredTestsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInputSchema';
import { TestCatalogUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUpdateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutSponsoredTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInputSchema;
