import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutTreatingProviderInputSchema } from './LabOrderCreateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedCreateWithoutTreatingProviderInputSchema';
import { LabOrderCreateOrConnectWithoutTreatingProviderInputSchema } from './LabOrderCreateOrConnectWithoutTreatingProviderInputSchema';
import { LabOrderCreateManyTreatingProviderInputEnvelopeSchema } from './LabOrderCreateManyTreatingProviderInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutTreatingProviderInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutTreatingProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutTreatingProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyTreatingProviderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutTreatingProviderInputSchema;
