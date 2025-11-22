import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema';

export const TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema;
