import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema;
