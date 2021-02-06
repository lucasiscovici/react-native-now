import { createActionsGettersSelectors } from 'redox'
import * as actions from './actions'
import { Startup } from './slice'

const {
	actions: createdActions,
	getters,
	selectors,
} = createActionsGettersSelectors({
	actions,
	slice: Startup,
})

export { createdActions as actions, getters, selectors, Startup }
