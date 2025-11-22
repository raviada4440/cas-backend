import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormCreateWithoutTemplateInputSchema } from './LabOrderFormCreateWithoutTemplateInputSchema';
import { LabOrderFormUncheckedCreateWithoutTemplateInputSchema } from './LabOrderFormUncheckedCreateWithoutTemplateInputSchema';

export const LabOrderFormCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormCreateOrConnectWithoutTemplateInput> = z.strictObject({
  where: z.lazy(() => LabOrderFormWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutTemplateInputSchema) ]),
});

export default LabOrderFormCreateOrConnectWithoutTemplateInputSchema;
