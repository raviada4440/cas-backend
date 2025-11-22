import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutOrganizationInputSchema } from './LabOrderUpdateWithoutOrganizationInputSchema';
import { LabOrderUncheckedUpdateWithoutOrganizationInputSchema } from './LabOrderUncheckedUpdateWithoutOrganizationInputSchema';
import { LabOrderCreateWithoutOrganizationInputSchema } from './LabOrderCreateWithoutOrganizationInputSchema';
import { LabOrderUncheckedCreateWithoutOrganizationInputSchema } from './LabOrderUncheckedCreateWithoutOrganizationInputSchema';

export const LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.LabOrderUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema;
