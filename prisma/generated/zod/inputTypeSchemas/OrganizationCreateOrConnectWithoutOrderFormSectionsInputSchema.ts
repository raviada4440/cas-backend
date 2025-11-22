import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutOrderFormSectionsInputSchema } from './OrganizationCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema';

export const OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrderFormSectionsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema;
