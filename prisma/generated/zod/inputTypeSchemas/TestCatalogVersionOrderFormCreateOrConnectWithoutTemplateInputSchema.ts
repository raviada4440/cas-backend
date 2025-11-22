import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema';

export const TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema) ]),
});

export default TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema;
