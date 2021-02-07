import { createActionsGettersSelectors } from 'redox'
import * as actions from './actions'
import { Theme } from './slice'

const {
  actions: createdActions,
  getters,
  selectors,
} = createActionsGettersSelectors({
  actions,
  slice: Theme,
})

export { createdActions as actions, getters, selectors, Theme }
