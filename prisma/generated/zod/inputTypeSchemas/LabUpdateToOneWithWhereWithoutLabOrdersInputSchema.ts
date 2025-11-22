import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabUpdateWithoutLabOrdersInputSchema } from './LabUpdateWithoutLabOrdersInputSchema';
import { LabUncheckedUpdateWithoutLabOrdersInputSchema } from './LabUncheckedUpdateWithoutLabOrdersInputSchema';

export const LabUpdateToOneWithWhereWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabUpdateToOneWithWhereWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => LabWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabUpdateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedUpdateWithoutLabOrdersInputSchema) ]),
});

export default LabUpdateToOneWithWhereWithoutLabOrdersInputSchema;
