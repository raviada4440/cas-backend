import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutLabOrderInputSchema } from './LabOrderConsentUpdateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema;
