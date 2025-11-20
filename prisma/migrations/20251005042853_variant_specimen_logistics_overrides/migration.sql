/*
  Warnings:

  - You are about to drop the column `minVolumeOverride` on the `TestConfigSpecimenManifest` table. All the data in the column will be lost.
  - You are about to drop the column `specialInstructions` on the `TestConfigSpecimenManifest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."TestConfigSpecimenManifest" DROP COLUMN "minVolumeOverride",
DROP COLUMN "specialInstructions",
ADD COLUMN     "alternateContainersOverride" TEXT,
ADD COLUMN     "causesForRejectionOverride" TEXT,
ADD COLUMN     "collectionMethodOverride" "public"."TestCatalogCollectionMethod",
ADD COLUMN     "collectionOverride" TEXT,
ADD COLUMN     "minimumVolumeOverride" VARCHAR(256),
ADD COLUMN     "patientPreparationOverride" TEXT,
ADD COLUMN     "preferredVolumeOverride" VARCHAR(64),
ADD COLUMN     "processingNotesOverride" TEXT,
ADD COLUMN     "specialInstructionsOverride" TEXT,
ADD COLUMN     "specimenDisplayNameOverride" VARCHAR(256),
ADD COLUMN     "specimenRequirementsOverride" TEXT,
ADD COLUMN     "specimenTypeOverride" "public"."SpecimenType",
ADD COLUMN     "stabilityRequirementsOverride" TEXT,
ADD COLUMN     "storageTransportationOverride" TEXT,
ADD COLUMN     "volumeOverride" VARCHAR(512);
