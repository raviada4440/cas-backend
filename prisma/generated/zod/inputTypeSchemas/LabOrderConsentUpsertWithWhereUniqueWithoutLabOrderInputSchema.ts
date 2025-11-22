import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutLabOrderInputSchema } from './LabOrderConsentUpdateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderConsentCreateWithoutLabOrderInputSchema } from './LabOrderConsentCreateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema;
