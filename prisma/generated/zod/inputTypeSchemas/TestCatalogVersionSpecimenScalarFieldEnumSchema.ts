import { z } from 'zod';

export const TestCatalogVersionSpecimenScalarFieldEnumSchema = z.enum(['id','versionId','displayName','isPrimary','isRequired','specimenType','specimenRequirements','volume','minimumVolume','container','specialInstructions','alternateContainers','preferredVolume','collectionMethod','collection','stabilityRequirements','storageTransportation','patientPreparation','causesForRejection','processingNotes','displayOrder','createdAt','updatedAt']);

export default TestCatalogVersionSpecimenScalarFieldEnumSchema;
