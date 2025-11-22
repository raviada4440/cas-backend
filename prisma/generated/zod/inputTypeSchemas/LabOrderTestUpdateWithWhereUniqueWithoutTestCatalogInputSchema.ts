import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithoutTestCatalogInputSchema } from './LabOrderTestUpdateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema';

export const LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
});

export default LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema;
