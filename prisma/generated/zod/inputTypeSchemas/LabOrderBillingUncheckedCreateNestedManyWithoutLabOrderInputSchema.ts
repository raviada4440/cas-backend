import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingCreateWithoutLabOrderInputSchema } from './LabOrderBillingCreateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderBillingCreateManyLabOrderInputEnvelopeSchema } from './LabOrderBillingCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderBillingWhereUniqueInputSchema } from './LabOrderBillingWhereUniqueInputSchema';

export const LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderBillingCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderBillingWhereUniqueInputSchema), z.lazy(() => LabOrderBillingWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInputSchema;
