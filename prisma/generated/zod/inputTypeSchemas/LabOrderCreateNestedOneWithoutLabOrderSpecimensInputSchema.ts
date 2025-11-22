import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderSpecimensInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderSpecimensInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSpecimensInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSpecimensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderSpecimensInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderSpecimensInputSchema;
