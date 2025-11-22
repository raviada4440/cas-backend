import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutTreatingProviderInputSchema } from './LabOrderUpdateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema';
import { LabOrderCreateWithoutTreatingProviderInputSchema } from './LabOrderCreateWithoutTreatingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutTreatingProviderInputSchema } from './LabOrderUncheckedCreateWithoutTreatingProviderInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutTreatingProviderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutTreatingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutTreatingProviderInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutTreatingProviderInputSchema;
