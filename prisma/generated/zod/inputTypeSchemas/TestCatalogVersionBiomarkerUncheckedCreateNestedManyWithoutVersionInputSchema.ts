import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';

export const TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionBiomarkerUncheckedCreateNestedManyWithoutVersionInputSchema;
