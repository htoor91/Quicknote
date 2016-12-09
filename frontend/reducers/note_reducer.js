import { RECEIVE_NOTE, RECEIVE_NOTES, MAKE_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

const initState = {};

const NoteReducer = (state = initState, action) => {
  const nextState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTE:
      nextState.currentNote = action.fetchedNote;
      return nextState;
    case RECEIVE_NOTES:
      nextState = action.allNotes;
      return nextState;
    case MAKE_NOTE:
      nextState[action.newNote.id] = action.newNote;
      return nextState;
    case EDIT_NOTE:
      nextState[action.editedNote.id] = action.editedNote;
      return nextState;
    case REMOVE_NOTE:
      delete nextState[action.note.id];
      return nextState;
    default:
      return state;
  }
};


export default NoteReducer;
