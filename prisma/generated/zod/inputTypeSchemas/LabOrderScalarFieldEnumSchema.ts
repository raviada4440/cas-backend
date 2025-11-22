import { z } from 'zod';

export const LabOrderScalarFieldEnumSchema = z.enum(['id','orderNumber','accessionNumber','testVersionId','testConfigurationId','labId','orderingProviderId','treatingProviderId','patientId','patientMRN','patientMobile','patientEmail','organizationId','clinicalNotes','clinicalDetails','clinicalPresentation','clinicalTesting','riskFlags','riskFlagNotes','clinicalAttachments','orderDate','orderNotes','createdAt','updatedAt']);

export default LabOrderScalarFieldEnumSchema;
