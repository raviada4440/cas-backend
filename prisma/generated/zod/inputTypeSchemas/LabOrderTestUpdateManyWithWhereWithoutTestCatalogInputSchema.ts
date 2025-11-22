import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestScalarWhereInputSchema } from './LabOrderTestScalarWhereInputSchema';
import { LabOrderTestUpdateManyMutationInputSchema } from './LabOrderTestUpdateManyMutationInputSchema';
import { LabOrderTestUncheckedUpdateManyWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedUpdateManyWithoutTestCatalogInputSchema';

export const LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestUpdateManyWithWhereWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => LabOrderTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderTestUpdateManyMutationInputSchema), z.lazy(() => LabOrderTestUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
});

export default LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema;
