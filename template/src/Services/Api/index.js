import { Config } from '@/Config'
import { configure } from 'api-service'

import { config } from '../Auth'

// configure({
//   baseUrl: Config.API_URL,
// })
// configure auth

configure({
  baseUrl: Config.API_URL,
  auth: config.apiService, // { Authorization: 'Bearer', getToken: auth.getToken, interceptors: auth.interceptors }
})
