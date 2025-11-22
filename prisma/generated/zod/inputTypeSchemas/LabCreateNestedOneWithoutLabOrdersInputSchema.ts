import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutLabOrdersInputSchema } from './LabCreateWithoutLabOrdersInputSchema';
import { LabUncheckedCreateWithoutLabOrdersInputSchema } from './LabUncheckedCreateWithoutLabOrdersInputSchema';
import { LabCreateOrConnectWithoutLabOrdersInputSchema } from './LabCreateOrConnectWithoutLabOrdersInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';

export const LabCreateNestedOneWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabCreateNestedOneWithoutLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutLabOrdersInputSchema), z.lazy(() => LabUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
});

export default LabCreateNestedOneWithoutLabOrdersInputSchema;
