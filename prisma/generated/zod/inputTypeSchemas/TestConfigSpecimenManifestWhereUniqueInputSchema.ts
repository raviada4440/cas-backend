import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema } from './TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema';
import { TestConfigSpecimenManifestWhereInputSchema } from './TestConfigSpecimenManifestWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumParticipantRoleFilterSchema } from './EnumParticipantRoleFilterSchema';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumSpecimenTypeNullableFilterSchema } from './EnumSpecimenTypeNullableFilterSchema';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTestCatalogCollectionMethodNullableFilterSchema } from './EnumTestCatalogCollectionMethodNullableFilterSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { TestCatalogVersionSpecimenScalarRelationFilterSchema } from './TestCatalogVersionSpecimenScalarRelationFilterSchema';
import { TestCatalogVersionSpecimenWhereInputSchema } from './TestCatalogVersionSpecimenWhereInputSchema';

export const TestConfigSpecimenManifestWhereUniqueInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    configurationId_versionSpecimenId_participantRole: z.lazy(() => TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    configurationId_versionSpecimenId_participantRole: z.lazy(() => TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  configurationId_versionSpecimenId_participantRole: z.lazy(() => TestConfigSpecimenManifestConfigurationIdVersionSpecimenIdParticipantRoleCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigSpecimenManifestWhereInputSchema), z.lazy(() => TestConfigSpecimenManifestWhereInputSchema).array() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionSpecimenId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  participantRole: z.union([ z.lazy(() => EnumParticipantRoleFilterSchema), z.lazy(() => ParticipantRoleSchema) ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  specimenTypeOverride: z.union([ z.lazy(() => EnumSpecimenTypeNullableFilterSchema), z.lazy(() => SpecimenTypeSchema) ]).optional().nullable(),
  specimenDisplayNameOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  volumeOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  minimumVolumeOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  preferredVolumeOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternateContainersOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  containerOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialInstructionsOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  collectionMethodOverride: z.union([ z.lazy(() => EnumTestCatalogCollectionMethodNullableFilterSchema), z.lazy(() => TestCatalogCollectionMethodSchema) ]).optional().nullable(),
  specimenRequirementsOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  collectionOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  stabilityRequirementsOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  storageTransportationOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientPreparationOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  causesForRejectionOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  processingNotesOverride: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  versionSpecimen: z.union([ z.lazy(() => TestCatalogVersionSpecimenScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema) ]).optional(),
}));

export default TestConfigSpecimenManifestWhereUniqueInputSchema;
