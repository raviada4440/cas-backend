import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUpdateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema';
import { OrganizationCreateWithoutPatientOrganizationsInputSchema } from './OrganizationCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutPatientOrganizationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutPatientOrganizationsInputSchema;
