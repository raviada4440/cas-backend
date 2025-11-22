import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutOrderFormsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutOrderFormsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderFormsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutOrderFormsInputSchema;
