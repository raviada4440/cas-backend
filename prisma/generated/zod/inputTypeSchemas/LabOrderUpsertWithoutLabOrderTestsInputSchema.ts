import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUpdateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema';
import { LabOrderCreateWithoutLabOrderTestsInputSchema } from './LabOrderCreateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderTestsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderTestsInputSchema;
