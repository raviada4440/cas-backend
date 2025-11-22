import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutPatientOrganizationsInputSchema } from './OrganizationCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema';
import { OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema } from './OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema';
import { OrganizationUpsertWithoutPatientOrganizationsInputSchema } from './OrganizationUpsertWithoutPatientOrganizationsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema';
import { OrganizationUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUpdateWithoutPatientOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema';

export const OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPatientOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPatientOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutPatientOrganizationsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUpdateWithoutPatientOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPatientOrganizationsInputSchema) ]).optional(),
});

export default OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema;
