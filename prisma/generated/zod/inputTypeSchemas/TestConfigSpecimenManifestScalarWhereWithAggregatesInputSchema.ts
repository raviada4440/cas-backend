import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumParticipantRoleWithAggregatesFilterSchema } from './EnumParticipantRoleWithAggregatesFilterSchema';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumSpecimenTypeNullableWithAggregatesFilterSchema } from './EnumSpecimenTypeNullableWithAggregatesFilterSchema';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema } from './EnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema), z.lazy(() => TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  configurationId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  versionSpecimenId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  participantRole: z.union([ z.lazy(() => EnumParticipantRoleWithAggregatesFilterSchema), z.lazy(() => ParticipantRoleSchema) ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  specimenTypeOverride: z.union([ z.lazy(() => EnumSpecimenTypeNullableWithAggregatesFilterSchema), z.lazy(() => SpecimenTypeSchema) ]).optional().nullable(),
  specimenDisplayNameOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  volumeOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  minimumVolumeOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  preferredVolumeOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  alternateContainersOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  containerOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  specialInstructionsOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  collectionMethodOverride: z.union([ z.lazy(() => EnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema), z.lazy(() => TestCatalogCollectionMethodSchema) ]).optional().nullable(),
  specimenRequirementsOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  collectionOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  stabilityRequirementsOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  storageTransportationOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  patientPreparationOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  causesForRejectionOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  processingNotesOverride: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default TestConfigSpecimenManifestScalarWhereWithAggregatesInputSchema;
