import { config } from 'dotenv'
import { resolve } from 'node:path'

const envFilePath = process.env['DOTENV_CONFIG_PATH'] || resolve(process.cwd(), '.env')

config({
  path: envFilePath,
  override: false,
})

