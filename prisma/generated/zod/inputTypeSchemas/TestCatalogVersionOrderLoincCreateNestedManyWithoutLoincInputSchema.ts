import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema } from './TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';

export const TestCatalogVersionOrderLoincCreateNestedManyWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateNestedManyWithoutLoincInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderLoincCreateNestedManyWithoutLoincInputSchema;
