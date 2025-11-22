import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutConsentTemplateInputSchema } from './LabOrderConsentUpdateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema';

export const LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
});

export default LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema;
