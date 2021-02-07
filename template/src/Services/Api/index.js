import { Config } from '@/Config'
import { configure } from 'api-service'

configure({
  baseUrl: Config.API_URL,
})
// configure auth

// configure({
//   baseUrl: Config.API_URL,
//   auth: { Authorization: 'Bearer', getToken: auth.getToken, interceptors: auth.interceptors },
// })
