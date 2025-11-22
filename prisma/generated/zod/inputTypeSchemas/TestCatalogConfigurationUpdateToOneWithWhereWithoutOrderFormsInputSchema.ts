import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema';

export const TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema) ]),
});

export default TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInputSchema;
