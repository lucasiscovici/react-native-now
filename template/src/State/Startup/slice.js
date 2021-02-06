// import {ACTION} from './actions';
import { launch } from './actions'
export const Startup = () => ({
  // initialState: {},
  // noPrefix : false,
  // prefix : null,
  // getters: {}, // ({state, getters, args}) | add getters (only for read from the state)
  // selectors: {}, //  ({getters, args}) | add selectors (when we combine getters or selectors)
  // reducers: {},
  // [ACTION.name]: (state, {payload}) => {},
  [launch.name]: (state, { payload }) => {},
})
