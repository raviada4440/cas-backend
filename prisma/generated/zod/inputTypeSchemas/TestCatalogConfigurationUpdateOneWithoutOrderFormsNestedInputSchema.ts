import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUpsertWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUpsertWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema';

export const TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogConfigurationUpsertWithoutOrderFormsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateToOneWithWhereWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedUpdateWithoutOrderFormsInputSchema) ]).optional(),
});

export default TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInputSchema;
