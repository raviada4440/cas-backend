import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithoutTemplateInputSchema } from './LabOrderFormUpdateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedUpdateWithoutTemplateInputSchema } from './LabOrderFormUncheckedUpdateWithoutTemplateInputSchema';

export const LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormUpdateWithWhereUniqueWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateWithoutTemplateInputSchema) ]),
});

export default LabOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema;
