import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutOrganizationInputSchema } from './LabOrderCreateWithoutOrganizationInputSchema';
import { LabOrderUncheckedCreateWithoutOrganizationInputSchema } from './LabOrderUncheckedCreateWithoutOrganizationInputSchema';

export const LabOrderCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutOrganizationInputSchema;
