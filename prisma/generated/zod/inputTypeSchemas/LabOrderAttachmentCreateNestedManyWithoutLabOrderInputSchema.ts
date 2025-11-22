import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';

export const LabOrderAttachmentCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderAttachmentCreateNestedManyWithoutLabOrderInputSchema;
