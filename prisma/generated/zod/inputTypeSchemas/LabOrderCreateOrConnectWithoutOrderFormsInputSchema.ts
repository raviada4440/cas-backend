import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutOrderFormsInputSchema } from './LabOrderCreateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedCreateWithoutOrderFormsInputSchema } from './LabOrderUncheckedCreateWithoutOrderFormsInputSchema';

export const LabOrderCreateOrConnectWithoutOrderFormsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutOrderFormsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderFormsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutOrderFormsInputSchema;
