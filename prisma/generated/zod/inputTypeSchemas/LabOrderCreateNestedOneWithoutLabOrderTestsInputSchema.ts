import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderTestsInputSchema } from './LabOrderCreateWithoutLabOrderTestsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderTestsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderTestsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderTestsInputSchema;
