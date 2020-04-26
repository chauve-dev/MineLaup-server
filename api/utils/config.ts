import path from 'path'
import Conf, { Schema } from 'conf'

const schema: { [key: string]: Schema } = {}

const config = new Conf({
  schema,
  cwd: path.resolve(__dirname, '../../'),
})

export default config
