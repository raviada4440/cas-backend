import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutConsentsInputSchema } from './LabOrderCreateWithoutConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutConsentsInputSchema } from './LabOrderUncheckedCreateWithoutConsentsInputSchema';
import { LabOrderCreateOrConnectWithoutConsentsInputSchema } from './LabOrderCreateOrConnectWithoutConsentsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutConsentsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutConsentsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutConsentsInputSchema;
