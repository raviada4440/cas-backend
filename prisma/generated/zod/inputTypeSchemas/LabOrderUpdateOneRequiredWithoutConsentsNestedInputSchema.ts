import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutConsentsInputSchema } from './LabOrderCreateWithoutConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutConsentsInputSchema } from './LabOrderUncheckedCreateWithoutConsentsInputSchema';
import { LabOrderCreateOrConnectWithoutConsentsInputSchema } from './LabOrderCreateOrConnectWithoutConsentsInputSchema';
import { LabOrderUpsertWithoutConsentsInputSchema } from './LabOrderUpsertWithoutConsentsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutConsentsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutConsentsInputSchema';
import { LabOrderUpdateWithoutConsentsInputSchema } from './LabOrderUpdateWithoutConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutConsentsInputSchema';

export const LabOrderUpdateOneRequiredWithoutConsentsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneRequiredWithoutConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutConsentsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutConsentsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutConsentsInputSchema), z.lazy(() => LabOrderUpdateWithoutConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutConsentsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneRequiredWithoutConsentsNestedInputSchema;
