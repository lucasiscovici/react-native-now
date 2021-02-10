import { createStore, configure } from 'redox'

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// for react-native
import AsyncStorage from '@react-native-community/async-storage'

// for auth-service
import { config } from '@/Services/Auth'

// if needed (BEFORE IMPORTING SLICES)
configure({
  modules: { ...config.authModule }, // object with modules
  // usePrf: true, // use default modules PRF
  // cleanIfCalledMultipleTimes: true, // if configure is called multiples times it's reset the modules
})

// slices
// import {SLICE_NAME} from './FEATURE_DIR'
import { User } from './User'
import { Theme } from './Theme'
import { Startup } from './Startup'

const { Provider, store, clearState } = createStore({
  slices: {
    // initialState: {},
    // SLICE_NAME
    User,
    Theme,
    Startup,
  },
  configureStoreOpts: {
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })

      if (__DEV__ && !process.env.JEST_WORKER_ID) {
        const createDebugger = require('redux-flipper').default
        middlewares.push(createDebugger())
      }
      return middlewares
    },
  },
  // combineReducersOpts : {},
  // reducers: { ...config.authServiceReducers },
  // for react-native
  persist: {
    storage: AsyncStorage,
    // whitelist: [...config.persistWhitelist], // auth-service
  },
})
config.setStore(store) // postCreateStore
export { Provider, store, clearState }
