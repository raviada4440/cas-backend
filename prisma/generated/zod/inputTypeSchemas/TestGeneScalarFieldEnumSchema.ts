import { z } from 'zod';

export const TestGeneScalarFieldEnumSchema = z.enum(['id','testId','labTestId','gene','transcriptReference','createdAt','updatedAt']);

export default TestGeneScalarFieldEnumSchema;
