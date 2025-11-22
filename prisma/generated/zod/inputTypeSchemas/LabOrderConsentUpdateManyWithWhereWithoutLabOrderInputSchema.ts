import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';
import { LabOrderConsentUpdateManyMutationInputSchema } from './LabOrderConsentUpdateManyMutationInputSchema';
import { LabOrderConsentUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateManyMutationInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema;
