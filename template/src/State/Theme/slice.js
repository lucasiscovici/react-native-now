// import {ACTION} from './actions';

export const Theme = () => ({
  initialState: {
    theme: null,
    darkMode: null,
  },
  // noPrefix : false,
  // prefix : null,
  getters: {
    getTheme: ({ state }) => {
      return state.theme
    },
    isDarkMode: ({ state }) => {
      return state.darkMode
    },
  }, // ({state, getters, args}) | add getters (only for read from the state)
  // selectors: {}, //  ({getters, args}) | add selectors (when we combine getters or selectors)
  reducers: {
    setDefaultTheme(state, { payload }) {
      if (!state.theme) {
        state.theme = payload.theme
        state.darkMode = payload.darkMode
      }
    },
    changeTheme(state, { payload }) {
      if (typeof payload.theme !== 'undefined') {
        state.theme = payload.theme
      }
      if (typeof payload.darkMode !== 'undefined') {
        state.darkMode = payload.darkMode
      }
    },
  },
  // [ACTION.name]: (state, {payload}) => {},
})
