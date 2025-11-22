import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema';

export const TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateWithoutLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema;
