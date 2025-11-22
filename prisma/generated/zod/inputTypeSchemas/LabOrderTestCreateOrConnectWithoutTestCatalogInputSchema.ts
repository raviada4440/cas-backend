import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestCreateWithoutTestCatalogInputSchema } from './LabOrderTestCreateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema';

export const LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestCreateOrConnectWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema;
