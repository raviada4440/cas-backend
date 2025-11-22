import { z } from 'zod';

export const OrganizationEndpointScalarFieldEnumSchema = z.enum(['id','organizationId','orgName','ehrVendor','fhirVersion','endpoint','issuer','clientId','clientSecret','authorizationEndpoint','tokenEndpoint','isActive','createdAt','updatedAt']);

export default OrganizationEndpointScalarFieldEnumSchema;
