import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateWithoutTestCatalogInputSchema } from './LabOrderTestCreateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema';
import { LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema } from './LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema';
import { LabOrderTestCreateManyTestCatalogInputEnvelopeSchema } from './LabOrderTestCreateManyTestCatalogInputEnvelopeSchema';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';

export const LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderTestUncheckedCreateNestedManyWithoutTestCatalogInputSchema;
