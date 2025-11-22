import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema';

export const TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema) ]),
});

export default TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema;
