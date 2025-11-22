import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema';

export const TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema;
