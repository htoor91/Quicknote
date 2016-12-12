import APIUtil from '../util/notebook_api_util';
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const MAKE_NOTEBOOK = "MAKE_NOTEBOOK";
export const EDIT_NOTEBOOK = "EDIT_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export function fetchNotebook(note) {
  return (dispatch) => {
    return APIUtil.fetchNotebook(note).then(
      (fetchedNotebook) => dispatch(receiveNotebook(fetchedNotebook))
    );
  };
}

export function fetchNotebooks() {
  return (dispatch) => {
    return APIUtil.fetchNotebooks().then(
      (allNotebooks) => dispatch(receiveNotebooks(allNotebooks))
    );
  };
}

export function createNotebook(noteParams) {
  return (dispatch) => {
    return APIUtil.createNotebook(noteParams).then(
      (newNotebook) => dispatch(makeNotebook(newNotebook))
    );
  };
}

export function updateNotebook(noteParams) {
  return (dispatch) => {
    return APIUtil.updateNotebook(noteParams).then(
      (editedNotebook) => dispatch(editNotebook(editedNotebook))
    );
  };
}

export function deleteNotebook(note) {
  return (dispatch) => {
    return APIUtil.deleteNotebook(note).then(
      (deletedNotebook) => dispatch(removeNotebook(deletedNotebook))
    );
  };
}

export const receiveNotebook = (fetchedNotebook) => {
  return {
    type: RECEIVE_NOTEBOOK,
    fetchedNotebook
  };
};

export const receiveNotebooks = (allNotebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    allNotebooks
  };
};

export const makeNotebook = (newNotebook) => {
  return {
    type: MAKE_NOTEBOOK,
    newNotebook
  };
};

export const editNotebook = (editedNotebook) => {
  return {
    type: EDIT_NOTEBOOK,
    editedNotebook,
  };
};

export const removeNotebook = (deletedNotebook) => {
  return {
    type: REMOVE_NOTEBOOK,
    deletedNotebook
  };
};
