import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutConfigurationInputSchema } from './LabOrderUpdateWithoutConfigurationInputSchema';
import { LabOrderUncheckedUpdateWithoutConfigurationInputSchema } from './LabOrderUncheckedUpdateWithoutConfigurationInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutConfigurationInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutConfigurationInputSchema;
