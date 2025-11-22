import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutVersionInputSchema } from './LabOrderCreateWithoutVersionInputSchema';
import { LabOrderUncheckedCreateWithoutVersionInputSchema } from './LabOrderUncheckedCreateWithoutVersionInputSchema';
import { LabOrderCreateOrConnectWithoutVersionInputSchema } from './LabOrderCreateOrConnectWithoutVersionInputSchema';
import { LabOrderCreateManyVersionInputEnvelopeSchema } from './LabOrderCreateManyVersionInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutVersionInputSchema), z.lazy(() => LabOrderCreateWithoutVersionInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutVersionInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutVersionInputSchema;
