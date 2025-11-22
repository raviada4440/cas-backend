import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutOrderingProviderInputSchema } from './LabOrderUpdateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrderingProviderInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutOrderingProviderInputSchema;
