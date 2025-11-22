import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';

export const TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema) ]),
});

export default TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema;
