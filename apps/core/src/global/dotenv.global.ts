import { resolve } from 'node:path'
import { config } from 'dotenv'

// Default to repo root .env; allow override via DOTENV_CONFIG_PATH
const defaultEnvPath = resolve(__dirname, '../../../.env')
const envFilePath = process.env['DOTENV_CONFIG_PATH'] || defaultEnvPath

config({
  path: envFilePath,
  override: false,
})
