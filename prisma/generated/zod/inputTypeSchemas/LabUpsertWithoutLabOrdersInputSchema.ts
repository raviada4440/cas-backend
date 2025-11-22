import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabUpdateWithoutLabOrdersInputSchema } from './LabUpdateWithoutLabOrdersInputSchema';
import { LabUncheckedUpdateWithoutLabOrdersInputSchema } from './LabUncheckedUpdateWithoutLabOrdersInputSchema';
import { LabCreateWithoutLabOrdersInputSchema } from './LabCreateWithoutLabOrdersInputSchema';
import { LabUncheckedCreateWithoutLabOrdersInputSchema } from './LabUncheckedCreateWithoutLabOrdersInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';

export const LabUpsertWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabUpsertWithoutLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabUpdateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedUpdateWithoutLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => LabCreateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedCreateWithoutLabOrdersInputSchema) ]),
  where: z.lazy(() => LabWhereInputSchema).optional(),
});

export default LabUpsertWithoutLabOrdersInputSchema;
