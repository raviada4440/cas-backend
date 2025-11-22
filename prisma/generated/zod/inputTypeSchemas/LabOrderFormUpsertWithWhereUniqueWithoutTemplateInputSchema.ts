import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutTemplateInputSchema } from './LabOrderFormUpdateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedUpdateWithoutTemplateInputSchema } from './LabOrderFormUncheckedUpdateWithoutTemplateInputSchema';
import { LabOrderFormCreateWithoutTemplateInputSchema } from './LabOrderFormCreateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedCreateWithoutTemplateInputSchema } from './LabOrderFormUncheckedCreateWithoutTemplateInputSchema';

export const LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormUpsertWithWhereUniqueWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema) ]),
});

export default LabOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema;
