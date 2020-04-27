import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
describe('Init server for e2e', () => {
  beforeEach(async () => {
    const config = require('../../nuxt.config')
    config.dev = false
    config.rootDir = resolve(__dirname, '../../')

    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    await nuxt.server.listen(4000, 'localhost')
  }, 30000)

  it('Route / exits and render HTML', async () => {
    const { html } = await nuxt.renderRoute('/', {})
    expect(html.includes('Documentation')).toBe(true)
  })

  // Close server and ask nuxt to stop listening to file changes
  afterEach(() => {
    nuxt.close()
  })
})
