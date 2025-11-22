import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema } from './TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';

export const TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema;
