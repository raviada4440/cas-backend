import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema;
