import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema';

export const LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema: z.ZodType<Prisma.LabOrderConsentCreateOrConnectWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema;
