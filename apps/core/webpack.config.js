const path = require('path')
const { IgnorePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (options) => {
  const existingExternals = Array.isArray(options.externals) ? options.externals : []
  options.externals = [
    ...existingExternals,
    function ({ request }, callback) {
      const externals = new Set([
        'hbs',
        'chokidar',
        'mock-aws-s3',
        'aws-sdk',
        'nock',
        '@nestjs/platform-express',
        '@fastify/view',
        '@prisma/client-runtime-utils',
      ])

      if (request && externals.has(request)) {
        return callback(null, `commonjs ${request}`)
      }

      callback()
    },
  ]

  options.plugins = options.plugins || []
  options.plugins.push(
    new IgnorePlugin({
      resourceRegExp: /^fsevents$/,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/i18n'),
          to: path.resolve(__dirname, 'dist/i18n'),
          noErrorOnMissing: true,
        },
      ],
    }),
  )

  return options
}

