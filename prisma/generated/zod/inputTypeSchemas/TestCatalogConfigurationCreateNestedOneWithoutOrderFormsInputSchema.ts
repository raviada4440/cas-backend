import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';

export const TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
});

export default TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInputSchema;
