import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutPatientOrganizationsInputSchema } from './OrganizationCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPatientOrganizationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema;
