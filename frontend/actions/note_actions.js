import APIUtil from "../util/note_api_util.js";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const MAKE_NOTE = "MAKE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_TAGGED_NOTES = "RECEIVE_TAGGED_NOTES";
export const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

export function fetchNote(note) {
  return (dispatch) => {
    return APIUtil.fetchNote(note).then(
      (fetchedNote) => dispatch(receiveNote(fetchedNote))
    );
  };
}

export function fetchNotes() {
  return (dispatch) => {
    return APIUtil.fetchNotes().then(
      (allNotes) => dispatch(receiveNotes(allNotes))
    );
  };
}

export function createNote(noteParams) {
  return (dispatch) => {
    return APIUtil.createNote(noteParams).then(
      (newNote) => dispatch(makeNote(newNote))
    );
  };
}

export function updateNote(noteParams) {
  return (dispatch) => {
    return APIUtil.updateNote(noteParams).then(
      (editedNote) => dispatch(editNote(editedNote))
    );
  };
}

export function deleteNote(note) {
  return (dispatch) => {
    return APIUtil.deleteNote(note).then(
      (deletedNote) => dispatch(removeNote(deletedNote))
    );
  };
}

export function fetchTaggedNotes(tag) {
  return (dispatch) => {
    return APIUtil.fetchTaggedNotes(tag).then(
      (fetchedNotes) => dispatch(receiveTaggedNotes(fetchedNotes))
    );
  };
}

export const setCurrentNote = (newCurrentNote) => {
  return {
    type: SET_CURRENT_NOTE,
    newCurrentNote
  };
};

export const receiveTaggedNotes = (fetchedNotes) => {
  return {
    type: RECEIVE_TAGGED_NOTES,
    fetchedNotes
  };
};

export const receiveNote = (fetchedNote) => {
  return {
    type: RECEIVE_NOTE,
    fetchedNote
  };
};

export const receiveNotes = (allNotes) => {
  return {
    type: RECEIVE_NOTES,
    allNotes
  };
};

export const makeNote = (newNote) => {
  return {
    type: MAKE_NOTE,
    newNote
  };
};

export const editNote = (editedNote) => {
  return {
    type: EDIT_NOTE,
    editedNote,
  };
};

export const removeNote = (deletedNote) => {
  return {
    type: REMOVE_NOTE,
    deletedNote
  };
};
