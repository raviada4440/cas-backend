import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenWhereUniqueInputSchema } from './LabOrderSpecimenWhereUniqueInputSchema';
import { LabOrderSpecimenCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSpecimenCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema;
