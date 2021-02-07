import { createApi } from 'api-service'

import * as commands from './commands'

const { api: userApi } = createApi({ commands })

export { userApi }
