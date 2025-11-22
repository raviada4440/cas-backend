import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationScalarWhereInputSchema } from './ProviderOrganizationScalarWhereInputSchema';
import { ProviderOrganizationUpdateManyMutationInputSchema } from './ProviderOrganizationUpdateManyMutationInputSchema';
import { ProviderOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema } from './ProviderOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema';

export const ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProviderOrganizationUpdateManyMutationInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default ProviderOrganizationUpdateManyWithWhereWithoutOrganizationInputSchema;
