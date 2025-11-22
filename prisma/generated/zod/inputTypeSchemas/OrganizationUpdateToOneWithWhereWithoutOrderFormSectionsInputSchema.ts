import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUpdateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInputSchema;
