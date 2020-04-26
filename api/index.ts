import express, { Application } from 'express'
import bodyParser from 'body-parser'
import router from './router'
import config from './utils/config'

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

export default {
  path: '/api',
  handler: app,
}
