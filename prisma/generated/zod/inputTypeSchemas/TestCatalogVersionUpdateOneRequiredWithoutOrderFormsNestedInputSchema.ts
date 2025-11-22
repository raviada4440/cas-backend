import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema';
import { TestCatalogVersionUpsertWithoutOrderFormsInputSchema } from './TestCatalogVersionUpsertWithoutOrderFormsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInputSchema } from './TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInputSchema';
import { TestCatalogVersionUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUpdateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema';

export const TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionUpsertWithoutOrderFormsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateToOneWithWhereWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUpdateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderFormsInputSchema) ]).optional(),
});

export default TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInputSchema;
