import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema;
