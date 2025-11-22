import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrderFormsInputSchema } from './LabOrderCreateWithoutOrderFormsInputSchema';
import { LabOrderUncheckedCreateWithoutOrderFormsInputSchema } from './LabOrderUncheckedCreateWithoutOrderFormsInputSchema';
import { LabOrderCreateOrConnectWithoutOrderFormsInputSchema } from './LabOrderCreateOrConnectWithoutOrderFormsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutOrderFormsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutOrderFormsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderFormsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderFormsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutOrderFormsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutOrderFormsInputSchema;
