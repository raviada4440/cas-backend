import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutTemplateInputSchema } from './LabOrderFormCreateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedCreateWithoutTemplateInputSchema } from './LabOrderFormUncheckedCreateWithoutTemplateInputSchema';
import { LabOrderFormCreateOrConnectWithoutTemplateInputSchema } from './LabOrderFormCreateOrConnectWithoutTemplateInputSchema';
import { LabOrderFormCreateManyTemplateInputEnvelopeSchema } from './LabOrderFormCreateManyTemplateInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';

export const LabOrderFormCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormCreateNestedManyWithoutTemplateInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutTemplateInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderFormCreateNestedManyWithoutTemplateInputSchema;
