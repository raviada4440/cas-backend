import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema';

export const TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateWithoutLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema;
