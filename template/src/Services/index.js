import { Config } from '@/Config'
let config = null
if (Config?.auth ?? false) {
  config = require('./Auth').config
}
import './Api'
export { config }
