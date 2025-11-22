import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';
import { TestCatalogVersionOrderFormUpdateManyMutationInputSchema } from './TestCatalogVersionOrderFormUpdateManyMutationInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateInputSchema';

export const TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateInputSchema) ]),
});

export default TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema;
