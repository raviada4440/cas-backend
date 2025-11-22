import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';
import { LabOrderFormUpdateManyMutationInputSchema } from './LabOrderFormUpdateManyMutationInputSchema';
import { LabOrderFormUncheckedUpdateManyWithoutTemplateInputSchema } from './LabOrderFormUncheckedUpdateManyWithoutTemplateInputSchema';

export const LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormUpdateManyWithWhereWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderFormUpdateManyMutationInputSchema), z.lazy(() => LabOrderFormUncheckedUpdateManyWithoutTemplateInputSchema) ]),
});

export default LabOrderFormUpdateManyWithWhereWithoutTemplateInputSchema;
