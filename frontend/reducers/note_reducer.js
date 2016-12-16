import { RECEIVE_NOTE, RECEIVE_NOTES, MAKE_NOTE, EDIT_NOTE, REMOVE_NOTE, RECEIVE_TAGGED_NOTES, SET_CURRENT_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';
import { allNotes } from './selectors';

const initState = {
  currentNote: null,
  allNotes: [],
  taggedNotes: []
};

const NoteReducer = (state = initState, action) => {
  let nextState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTE:
      nextState.currentNote = action.fetchedNote;
      return nextState;
    case RECEIVE_NOTES:

      nextState = merge(nextState, action.allNotes);
      const sortedNotes = allNotes(action.allNotes).sort((a,b) => {
        let dateOne = new Date(a.updated_at);
        let dateTwo = new Date(b.updated_at);
        return dateTwo - dateOne;
      });
      nextState.allNotes = sortedNotes;
      return nextState;
    case MAKE_NOTE:
      nextState[action.newNote.id] = action.newNote;
      nextState.allNotes.unshift(action.newNote);
      return nextState;
    case EDIT_NOTE:
      nextState[action.editedNote.id] = action.editedNote;
      nextState.currentNote = action.editedNote;
      return nextState;
    case REMOVE_NOTE:
      delete nextState[action.deletedNote.id];
      return nextState;
    case RECEIVE_TAGGED_NOTES:
    // TODO: Possibly change
      nextState.taggedNotes = action.fetchedNotes;
      return nextState;
    case SET_CURRENT_NOTE:
      nextState.currentNote = action.newCurrentNote;
      return nextState;
    default:
      return state;
  }
};


export default NoteReducer;
