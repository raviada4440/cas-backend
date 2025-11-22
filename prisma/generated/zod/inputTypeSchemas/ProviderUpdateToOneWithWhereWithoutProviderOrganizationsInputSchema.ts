import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUpdateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema';

export const ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProviderUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]),
});

export default ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema;
