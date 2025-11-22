import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrderFormSectionsInputSchema } from './OrganizationCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema } from './OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema';
import { OrganizationUpsertWithoutOrderFormSectionsInputSchema } from './OrganizationUpsertWithoutOrderFormSectionsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInputSchema';
import { OrganizationUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUpdateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema';

export const OrganizationUpdateOneWithoutOrderFormSectionsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrderFormSectionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrderFormSectionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUpdateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutOrderFormSectionsNestedInputSchema;
