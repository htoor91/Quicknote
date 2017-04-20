import { RECEIVE_NOTE_TAGS, RECEIVE_TAGS, MAKE_TAG, REMOVE_TAG, SET_CURRENT_TAG, REMOVE_ZERO } from '../actions/tag_actions';
import merge from 'lodash/merge';
import { allTags } from './selectors';

const initState = {
  currentTag: null,
  allTags: [],
  currentNoteTags: []
};

const TagReducer = (state = initState, action) => {
  let nextState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTE_TAGS:

      nextState.currentNoteTags = allTags(action.fetchedNoteTags);

      return nextState;
    case SET_CURRENT_TAG:
      nextState.currentTag = action.newCurrentTag;
      return nextState;
    case RECEIVE_TAGS:
      nextState = merge(nextState, action.allTags);
      nextState.allTags = allTags(action.allTags);
      return nextState;
    case MAKE_TAG:

      nextState[action.newTag.id] = action.newTag;
      nextState.allTags.push(action.newTag);

      return nextState;

    case REMOVE_TAG:
      delete nextState[action.deletedTag.id];
      nextState.currentTag = null;
      return nextState;
    case REMOVE_ZERO:
      delete nextState[0];
      return nextState;
    default:
      return state;
  }
};


export default TagReducer;
