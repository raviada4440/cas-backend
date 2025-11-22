import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUpdateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema;
