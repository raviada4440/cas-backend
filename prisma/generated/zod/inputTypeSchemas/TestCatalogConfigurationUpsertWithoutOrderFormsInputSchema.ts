import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationUpsertWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpsertWithoutOrderFormsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema) ]),
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationUpsertWithoutOrderFormsInputSchema;
