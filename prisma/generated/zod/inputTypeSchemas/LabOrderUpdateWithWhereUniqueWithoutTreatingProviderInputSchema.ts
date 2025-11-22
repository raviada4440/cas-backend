import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutTreatingProviderInputSchema } from './LabOrderUpdateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutTreatingProviderInputSchema;
