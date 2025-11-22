import { prisma } from './prisma'

const TABLES = [
  '"LabOrderAttachment"',
  '"LabOrderBilling"',
  '"LabOrderConsent"',
  '"LabOrderForm"',
  '"LabOrderIcd"',
  '"LabOrderSpecimen"',
  '"LabOrderSponsoredTestConsent"',
  '"LabOrderStatus"',
  '"LabOrderTest"',
  '"LabOrder"',
  '"PatientOrganization"',
  '"Patient"',
  '"Provider"',
  '"Organization"',
  '"OrderFormTemplate"',
  '"OrderFormSection"',
  '"Biomarker"',
  '"CptCode"',
  '"Icd"',
  '"Lab"',
  '"Loinc"',
  '"TestCatalogVersionSpecimen"',
  '"TestCatalogVersionBiomarker"',
  '"TestCatalogVersionCptCode"',
  '"TestCatalogVersionOrderLoinc"',
  '"TestCatalogVersionResultLoinc"',
  '"TestCatalogVersionOrderForm"',
  '"TestCatalogVersionConsent"',
  '"TestCatalogVersion"',
  '"TestCatalogConfiguration"',
  '"TestCatalogAuditLog"',
  '"TestCatalog"',
  '"User"',
]

// eslint-disable-next-line import/no-default-export
export default async () => {
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${TABLES.join(', ')} RESTART IDENTITY CASCADE`)
}
