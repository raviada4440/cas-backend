import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema';
import { LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema } from './LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';

export const LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema: z.ZodType<Prisma.LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema;
