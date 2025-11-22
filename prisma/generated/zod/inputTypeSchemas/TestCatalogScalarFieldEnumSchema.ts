import { z } from 'zod';

export const TestCatalogScalarFieldEnumSchema = z.enum(['id','labId','casandraTestId','labTestId','testName','specialNotes','testCategory','testSubCategory','status','defaultVersionId','currentVersion','createdAt','updatedAt']);

export default TestCatalogScalarFieldEnumSchema;
