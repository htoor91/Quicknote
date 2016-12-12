import { RECEIVE_NOTE_TAG, RECEIVE_TAGS, MAKE_TAG, REMOVE_TAG, REMOVE_TAGGING } from '../actions/tag_actions';
import merge from 'lodash/merge';
import { allTags } from './selectors';

const initState = {
  currentTags: null,
  allTags: [],
  currentNoteTags: []
};

const TagReducer = (state = initState, action) => {
  let nextState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTE_TAG:
      nextState.currentTags = action.fetchedNoteTags;
      return nextState;
    case RECEIVE_TAGS:
      nextState = merge(nextState, action.allTags);
      nextState.allTags = allTags(action.allTags);
      return nextState;
    case MAKE_TAG:
      nextState[action.newTag.id] = action.newTag;
      return nextState;
    case REMOVE_TAGGING:
      // TODO 
      return nextState;
    case REMOVE_TAG:
      delete nextState[action.deletedTag.id];
      return nextState;
    default:
      return state;
  }
};


export default TagReducer;
