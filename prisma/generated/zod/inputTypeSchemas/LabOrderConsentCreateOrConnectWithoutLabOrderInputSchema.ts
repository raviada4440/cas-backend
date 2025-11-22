import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentCreateWithoutLabOrderInputSchema } from './LabOrderConsentCreateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema;
