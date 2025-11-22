import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutOrderingProviderInputSchema } from './LabOrderUpdateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema';
import { LabOrderCreateWithoutOrderingProviderInputSchema } from './LabOrderCreateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedCreateWithoutOrderingProviderInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutOrderingProviderInputSchema;
