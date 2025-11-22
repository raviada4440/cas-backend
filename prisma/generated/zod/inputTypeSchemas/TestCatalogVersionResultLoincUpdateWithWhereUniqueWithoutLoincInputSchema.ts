import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema';

export const TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema;
