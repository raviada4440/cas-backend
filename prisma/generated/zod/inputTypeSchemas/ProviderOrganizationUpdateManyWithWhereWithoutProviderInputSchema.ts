import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationScalarWhereInputSchema } from './ProviderOrganizationScalarWhereInputSchema';
import { ProviderOrganizationUpdateManyMutationInputSchema } from './ProviderOrganizationUpdateManyMutationInputSchema';
import { ProviderOrganizationUncheckedUpdateManyWithoutProviderInputSchema } from './ProviderOrganizationUncheckedUpdateManyWithoutProviderInputSchema';

export const ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationUpdateManyWithWhereWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProviderOrganizationUpdateManyMutationInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateManyWithoutProviderInputSchema) ]),
});

export default ProviderOrganizationUpdateManyWithWhereWithoutProviderInputSchema;
