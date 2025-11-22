import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrganizationInputSchema } from './LabOrderCreateWithoutOrganizationInputSchema';
import { LabOrderUncheckedCreateWithoutOrganizationInputSchema } from './LabOrderUncheckedCreateWithoutOrganizationInputSchema';
import { LabOrderCreateOrConnectWithoutOrganizationInputSchema } from './LabOrderCreateOrConnectWithoutOrganizationInputSchema';
import { LabOrderCreateManyOrganizationInputEnvelopeSchema } from './LabOrderCreateManyOrganizationInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutOrganizationInputSchema;
