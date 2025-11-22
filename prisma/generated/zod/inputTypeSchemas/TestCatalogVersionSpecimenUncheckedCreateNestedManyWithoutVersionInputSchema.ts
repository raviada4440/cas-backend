import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';

export const TestCatalogVersionSpecimenUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionSpecimenUncheckedCreateNestedManyWithoutVersionInputSchema;
