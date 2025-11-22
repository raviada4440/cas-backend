import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrderFormsInputSchema } from './LabOrderCreateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedCreateWithoutOrderFormsInputSchema } from './LabOrderUncheckedCreateWithoutOrderFormsInputSchema';
import { LabOrderCreateOrConnectWithoutOrderFormsInputSchema } from './LabOrderCreateOrConnectWithoutOrderFormsInputSchema';
import { LabOrderUpsertWithoutOrderFormsInputSchema } from './LabOrderUpsertWithoutOrderFormsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutOrderFormsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutOrderFormsInputSchema';
import { LabOrderUpdateWithoutOrderFormsInputSchema } from './LabOrderUpdateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedUpdateWithoutOrderFormsInputSchema } from './LabOrderUncheckedUpdateWithoutOrderFormsInputSchema';

export const LabOrderUpdateOneRequiredWithoutOrderFormsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneRequiredWithoutOrderFormsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutOrderFormsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUpdateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrderFormsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneRequiredWithoutOrderFormsNestedInputSchema;
