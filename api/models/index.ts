import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import { Dialect } from 'sequelize/types'
import config from '../utils/config'

const sequelize = new Sequelize(
  config.get('db_name') as string,
  config.get('db_user') as string,
  config.get('db_password') as string,
  {
    storage:
      config.get('db_type') === 'sqlite'
        ? (config.get('db_path') as string)
        : '',
    models: [path.join(__dirname, '/*.model.ts')],
    modelMatch: (filename, member) => {
      return (
        filename.substring(0, filename.indexOf('.model')) ===
        member.toLowerCase()
      )
    },
    dialect: config.get('db_type', 'sqlite') as Dialect,
  }
)

export default sequelize
