import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema;
