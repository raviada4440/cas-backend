import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithoutConsentTemplateInputSchema } from './LabOrderConsentUpdateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema';
import { LabOrderConsentCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema';

export const LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema;
