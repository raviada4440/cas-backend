import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';

export const TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInputSchema;
