import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithoutOrganizationInputSchema } from './LabOrderUpdateWithoutOrganizationInputSchema';
import { LabOrderUncheckedUpdateWithoutOrganizationInputSchema } from './LabOrderUncheckedUpdateWithoutOrganizationInputSchema';

export const LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.LabOrderUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema;
