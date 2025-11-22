import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema } from './LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderSpecimenWhereUniqueInputSchema } from './LabOrderSpecimenWhereUniqueInputSchema';

export const LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema), z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInputSchema;
