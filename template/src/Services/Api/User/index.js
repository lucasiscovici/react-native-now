import { createApi } from 'api-service'

import * as commands from './commands'

const userApi = createApi({ commands })
export { userApi }
