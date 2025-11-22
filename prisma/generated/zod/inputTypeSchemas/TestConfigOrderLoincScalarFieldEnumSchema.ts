import { z } from 'zod';

export const TestConfigOrderLoincScalarFieldEnumSchema = z.enum(['id','configurationId','loincCode','createdAt','updatedAt']);

export default TestConfigOrderLoincScalarFieldEnumSchema;
