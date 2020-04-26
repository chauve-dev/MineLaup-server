import express, { Application } from 'express'
import bodyParser from 'body-parser'
import router from './router'
import config from './utils/config'
import sequelize from './models'

/**
 * Force the config generation
 */
config.get('')

/**
 * Configuring Express application
 */
const app: Application = express()

/**
 * Registering parsers
 */
app.use(
  bodyParser.json({
    limit: '50mb',
  })
)

/**
 * Registering routes
 */
router(app)

/**
 * Sync the sequelize database
 */
if (config.get('db_type')) {
  sequelize.sync()
}

export default {
  path: '/api',
  handler: app,
}
