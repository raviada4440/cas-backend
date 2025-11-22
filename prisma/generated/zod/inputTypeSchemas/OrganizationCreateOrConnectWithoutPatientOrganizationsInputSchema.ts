import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutPatientOrganizationsInputSchema } from './OrganizationCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema';

export const OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPatientOrganizationsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema;
