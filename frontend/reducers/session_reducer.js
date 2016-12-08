import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

// { session: { currentUser: {...}, errors: [...] } }
// so session "state" is : { currentUser... etc}
const initState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = initState, action) => {
  const nextState = merge({}, state);
	Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors,
      };
    case CLEAR_ERRORS:
      nextState.errors = [];
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
