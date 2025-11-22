import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema';

export const TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateWithoutTemplateInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema;
