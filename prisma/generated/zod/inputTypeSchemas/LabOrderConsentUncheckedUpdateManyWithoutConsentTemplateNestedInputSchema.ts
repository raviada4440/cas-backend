import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema';
import { LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema } from './LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema';
import { LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema } from './LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema';
import { LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema } from './LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema } from './LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema';
import { LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema } from './LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';

export const LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema: z.ZodType<Prisma.LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema), z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderConsentScalarWhereInputSchema), z.lazy(() => LabOrderConsentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderConsentUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema;
