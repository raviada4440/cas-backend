import './global/dotenv.global'
import { AxiosRequestConfig } from 'axios'
import { argv } from 'zx-cjs'

import { isDev } from './shared/utils/environment.util'

console.log(argv)
export const PORT = argv.port || 3333
export const CROSS_DOMAIN = {
  allowedOrigins: [
    'innei.in',
    'shizuri.net',
    'localhost:9528',
    'localhost:2323',
    '127.0.0.1',
    'mbp.cc',
    'local.innei.test',
    '22333322.xyz',
  ],
  allowedReferer: 'innei.in',
}

const DEFAULT_REDIS_HOST = 'localhost'
const DEFAULT_REDIS_PORT = 6379

const redisHost = argv.redis_host ?? process.env.REDIS_HOST ?? DEFAULT_REDIS_HOST
const redisPort =
  Number(argv.redis_port ?? process.env.REDIS_PORT ?? DEFAULT_REDIS_PORT) ||
  DEFAULT_REDIS_PORT
const redisPassword =
  argv.redis_password ?? process.env.REDIS_PASSWORD ?? null
const redisUsername =
  argv.redis_username ?? process.env.REDIS_USERNAME ?? null

export const REDIS = {
  host: redisHost,
  port: redisPort,
  password: redisPassword,
  username: redisUsername,
  ttl: null,
  httpCacheTTL: 5,
  max: 5,
  disableApiCache:
    (isDev || argv.disable_cache) && !process.env['ENABLE_CACHE_DEBUG'],
}
export const SECURITY = {
  jwtSecret: argv.jwtSecret || 'asjhczxiucipoiopiqm2376',
  jwtExpire: 7,
}

export const AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
}

export const ENCRYPT = {
  key: '',
  enable: false,
  algorithm: argv.encrypt_algorithm || 'aes-256-ecb',
}

export const CLUSTER = {
  enable: false,
  workers: argv.cluster_workers,
}
