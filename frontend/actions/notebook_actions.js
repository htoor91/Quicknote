import APIUtil from '../util/notebookbook_api_util';
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const MAKE_NOTEBOOK = "MAKE_NOTEBOOK";
export const EDIT_NOTEBOOK = "EDIT_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";

export function fetchNotebook(notebook) {
  return (dispatch) => {
    return APIUtil.fetchNotebook(notebook).then(
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

export function createNotebook(notebookParams) {
  return (dispatch) => {
    return APIUtil.createNotebook(notebookParams).then(
      (newNotebook) => dispatch(makeNotebook(newNotebook))
    );
  };
}

export function updateNotebook(notebookParams) {
  return (dispatch) => {
    return APIUtil.updateNotebook(notebookParams).then(
      (editedNotebook) => dispatch(editNotebook(editedNotebook))
    );
  };
}

export function deleteNotebook(notebook) {
  return (dispatch) => {
    return APIUtil.deleteNotebook(notebook).then(
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
