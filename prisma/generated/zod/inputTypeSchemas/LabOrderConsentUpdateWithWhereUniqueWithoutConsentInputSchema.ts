import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutConsentInputSchema } from './LabOrderConsentUpdateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutConsentInputSchema } from './LabOrderConsentUncheckedUpdateWithoutConsentInputSchema';

export const LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateWithWhereUniqueWithoutConsentInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutConsentInputSchema) ]),
});

export default LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema;
