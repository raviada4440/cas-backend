import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutTemplateInputSchema } from './LabOrderFormCreateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedCreateWithoutTemplateInputSchema } from './LabOrderFormUncheckedCreateWithoutTemplateInputSchema';
import { LabOrderFormCreateOrConnectWithoutTemplateInputSchema } from './LabOrderFormCreateOrConnectWithoutTemplateInputSchema';
import { LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema } from './LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { LabOrderFormCreateManyTemplateInputEnvelopeSchema } from './LabOrderFormCreateManyTemplateInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema } from './LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema } from './LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';

export const LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutTemplateInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderFormScalarWhereInputSchema), z.lazy(() => LabOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema;
