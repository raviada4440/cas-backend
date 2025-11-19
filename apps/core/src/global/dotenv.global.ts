import { resolve } from 'node:path'
import { config } from 'dotenv'

const envFilePath = process.env['DOTENV_CONFIG_PATH'] || resolve(process.cwd(), '.env')

config({
  path: envFilePath,
  override: false,
})
