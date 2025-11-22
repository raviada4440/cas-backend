import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema';

export const TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema;
