import { Config } from '@/Config'
import { configure, useAuth } from 'auth-service'

const callbackAfterLogout = () => {
  const { store, clearState } = require('@/State/store')
  store.dispatch(clearState)
}

const { config } = configure({
  Authorization: 'Bearer',
  callbackAfterLogout: callbackAfterLogout,
  clientId: Config.clientId,
  clientSecret: Config.clientSecret,
  baseUrlAuth: Config.AUTH_URL,
  textAlertBeforeExpiredLogout: 'Session Expiré, Veuillez vous reconnecter.',
  textAlertBeforeLogout: 'Vous êtes bien déconnecté',
  logoutIfTokensExpired: true,
})
export { config, useAuth }
