import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderIcdsInputSchema } from './LabOrderCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderIcdsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderIcdsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema;
