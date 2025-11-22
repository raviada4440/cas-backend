import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUpdateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderTestsInputSchema;
