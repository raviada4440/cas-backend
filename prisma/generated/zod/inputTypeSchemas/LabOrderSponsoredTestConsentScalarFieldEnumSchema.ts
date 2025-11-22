import { z } from 'zod';

export const LabOrderSponsoredTestConsentScalarFieldEnumSchema = z.enum(['id','labOrderId','sponsoredCasandraTestId','providerName','providerNpi','consentAt','createdAt','updatedAt']);

export default LabOrderSponsoredTestConsentScalarFieldEnumSchema;
