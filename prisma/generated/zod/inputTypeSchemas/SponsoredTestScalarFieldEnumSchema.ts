import { z } from 'zod';

export const SponsoredTestScalarFieldEnumSchema = z.enum(['id','testId','labTestId','sponsoredProgramId','labId','casandraTestId','category','subCategory','createdAt','updatedAt']);

export default SponsoredTestScalarFieldEnumSchema;
