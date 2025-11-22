import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutConsentInputSchema } from './LabOrderConsentUpdateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutConsentInputSchema } from './LabOrderConsentUncheckedUpdateWithoutConsentInputSchema';
import { LabOrderConsentCreateWithoutConsentInputSchema } from './LabOrderConsentCreateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentInputSchema';

export const LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentUpsertWithWhereUniqueWithoutConsentInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutConsentInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema) ]),
});

export default LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema;
