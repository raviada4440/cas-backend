import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUpdateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInputSchema;
