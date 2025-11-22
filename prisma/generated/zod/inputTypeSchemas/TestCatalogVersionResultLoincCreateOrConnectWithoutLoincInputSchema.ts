import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema';

export const TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema;
