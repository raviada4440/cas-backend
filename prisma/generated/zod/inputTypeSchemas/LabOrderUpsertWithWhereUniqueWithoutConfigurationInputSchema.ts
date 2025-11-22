import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutConfigurationInputSchema } from './LabOrderUpdateWithoutConfigurationInputSchema';
import { LabOrderUncheckedUpdateWithoutConfigurationInputSchema } from './LabOrderUncheckedUpdateWithoutConfigurationInputSchema';
import { LabOrderCreateWithoutConfigurationInputSchema } from './LabOrderCreateWithoutConfigurationInputSchema';
import { LabOrderUncheckedCreateWithoutConfigurationInputSchema } from './LabOrderUncheckedCreateWithoutConfigurationInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutConfigurationInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutConfigurationInputSchema;
