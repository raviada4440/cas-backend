import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema } from './TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema';
import { TestConfigBiomarkerWhereInputSchema } from './TestConfigBiomarkerWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumBiomarkerOverrideActionFilterSchema } from './EnumBiomarkerOverrideActionFilterSchema';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { BiomarkerScalarRelationFilterSchema } from './BiomarkerScalarRelationFilterSchema';
import { BiomarkerWhereInputSchema } from './BiomarkerWhereInputSchema';

export const TestConfigBiomarkerWhereUniqueInputSchema: z.ZodType<Prisma.TestConfigBiomarkerWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    configurationId_hgncId: z.lazy(() => TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    configurationId_hgncId: z.lazy(() => TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  configurationId_hgncId: z.lazy(() => TestConfigBiomarkerConfigurationIdHgncIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestConfigBiomarkerWhereInputSchema), z.lazy(() => TestConfigBiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigBiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigBiomarkerWhereInputSchema), z.lazy(() => TestConfigBiomarkerWhereInputSchema).array() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  hgncId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  action: z.union([ z.lazy(() => EnumBiomarkerOverrideActionFilterSchema), z.lazy(() => BiomarkerOverrideActionSchema) ]).optional(),
  transcriptReference: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  reportTier: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isReportable: z.union([ z.lazy(() => BoolNullableFilterSchema), z.boolean() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  biomarker: z.union([ z.lazy(() => BiomarkerScalarRelationFilterSchema), z.lazy(() => BiomarkerWhereInputSchema) ]).optional(),
}));

export default TestConfigBiomarkerWhereUniqueInputSchema;
