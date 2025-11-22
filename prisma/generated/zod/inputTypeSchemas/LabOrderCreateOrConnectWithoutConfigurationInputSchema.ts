import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutConfigurationInputSchema } from './LabOrderCreateWithoutConfigurationInputSchema';
import { LabOrderUncheckedCreateWithoutConfigurationInputSchema } from './LabOrderUncheckedCreateWithoutConfigurationInputSchema';

export const LabOrderCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutConfigurationInputSchema;
