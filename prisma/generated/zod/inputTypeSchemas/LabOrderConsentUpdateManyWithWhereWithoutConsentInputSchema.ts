import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';
import { LabOrderConsentUpdateManyMutationInputSchema } from './LabOrderConsentUpdateManyMutationInputSchema';
import { LabOrderConsentUncheckedUpdateManyWithoutConsentInputSchema } from './LabOrderConsentUncheckedUpdateManyWithoutConsentInputSchema';

export const LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateManyWithWhereWithoutConsentInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateManyMutationInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateManyWithoutConsentInputSchema) ]),
});

export default LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema;
