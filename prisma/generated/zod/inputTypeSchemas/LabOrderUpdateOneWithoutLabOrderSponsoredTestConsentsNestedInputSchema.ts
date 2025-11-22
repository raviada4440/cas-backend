import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const LabOrderUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  upsert: z.lazy(() => LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabOrderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
});

export default LabOrderUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInputSchema;
