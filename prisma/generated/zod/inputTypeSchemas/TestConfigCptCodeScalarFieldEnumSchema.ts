import { z } from 'zod';

export const TestConfigCptCodeScalarFieldEnumSchema = z.enum(['id','configurationId','cptCode','modifier','isPrimary','createdAt','updatedAt']);

export default TestConfigCptCodeScalarFieldEnumSchema;
