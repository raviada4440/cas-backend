import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema } from './TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';

export const TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema).array(), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionBiomarkerCreateNestedManyWithoutBiomarkerInputSchema;
