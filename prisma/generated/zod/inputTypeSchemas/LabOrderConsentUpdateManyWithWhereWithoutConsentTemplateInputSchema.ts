import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';
import { LabOrderConsentUpdateManyMutationInputSchema } from './LabOrderConsentUpdateManyMutationInputSchema';
import { LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema';

export const LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateManyMutationInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema) ]),
});

export default LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema;
