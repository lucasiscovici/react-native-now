import {createActionsGettersSelectors} from 'redox';
import * as actions from './actions';
import {User} from './slice';

const {actions: createdActions, getters, selectors} = createActionsGettersSelectors({
    actions,
    slice: User,
});

export {createdActions as actions, getters, selectors, User};
