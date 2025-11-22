import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentCreateWithoutConsentInputSchema } from './LabOrderConsentCreateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentInputSchema';

export const LabOrderConsentCreateOrConnectWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentCreateOrConnectWithoutConsentInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema) ]),
});

export default LabOrderConsentCreateOrConnectWithoutConsentInputSchema;
