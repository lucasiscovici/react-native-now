// import {ACTION} from './actions';
import { getUser } from './actions'

export const User = () => ({
  initialState: {
    user: {},
    /*
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
      */
  },
  // noPrefix : false,
  // prefix : null,
  getters: {
    get: ({ state }) => state.user,
  }, // ({state, getters, args}) | add getters (only for read from the state)
  // selectors: {}, //  ({getters, args}) | add selectors (when we combine getters or selectors)
  // reducers: {},
  // [ACTION.name]: (state, {payload}) => {},
  [getUser.name]: (state, { payload }) => {
    state.user = payload
  },
})
