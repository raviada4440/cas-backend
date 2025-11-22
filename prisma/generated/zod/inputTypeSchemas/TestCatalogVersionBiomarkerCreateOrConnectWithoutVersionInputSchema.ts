import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema;
