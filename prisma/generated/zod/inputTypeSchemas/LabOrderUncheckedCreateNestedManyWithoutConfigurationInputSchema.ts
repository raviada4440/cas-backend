import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutConfigurationInputSchema } from './LabOrderCreateWithoutConfigurationInputSchema';
import { LabOrderUncheckedCreateWithoutConfigurationInputSchema } from './LabOrderUncheckedCreateWithoutConfigurationInputSchema';
import { LabOrderCreateOrConnectWithoutConfigurationInputSchema } from './LabOrderCreateOrConnectWithoutConfigurationInputSchema';
import { LabOrderCreateManyConfigurationInputEnvelopeSchema } from './LabOrderCreateManyConfigurationInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutConfigurationInputSchema;
