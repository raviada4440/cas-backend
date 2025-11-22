import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUpdateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema';
import { TestCatalogVersionCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutOrderFormsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutOrderFormsInputSchema;
