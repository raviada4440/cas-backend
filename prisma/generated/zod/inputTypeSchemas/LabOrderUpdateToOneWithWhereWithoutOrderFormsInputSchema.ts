import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutOrderFormsInputSchema } from './LabOrderUpdateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedUpdateWithoutOrderFormsInputSchema } from './LabOrderUncheckedUpdateWithoutOrderFormsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutOrderFormsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrderFormsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutOrderFormsInputSchema;
