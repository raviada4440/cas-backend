import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutOrderFormsInputSchema } from './LabOrderUpdateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedUpdateWithoutOrderFormsInputSchema } from './LabOrderUncheckedUpdateWithoutOrderFormsInputSchema';
import { LabOrderCreateWithoutOrderFormsInputSchema } from './LabOrderCreateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedCreateWithoutOrderFormsInputSchema } from './LabOrderUncheckedCreateWithoutOrderFormsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutOrderFormsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutOrderFormsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrderFormsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderFormsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutOrderFormsInputSchema;
