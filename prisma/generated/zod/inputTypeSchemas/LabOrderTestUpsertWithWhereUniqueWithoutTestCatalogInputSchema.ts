import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithoutTestCatalogInputSchema } from './LabOrderTestUpdateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema';
import { LabOrderTestCreateWithoutTestCatalogInputSchema } from './LabOrderTestCreateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema';

export const LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema;
