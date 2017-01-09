import APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const REMOVE_ZERO = "REMOVE_ZERO";

export function fetchNoteTags(note) {
  return (dispatch) => {
    return APIUtil.fetchNoteTags(note).then(
      (fetchedNoteTags) => dispatch(receiveNoteTags(fetchedNoteTags))
    );
  };
}

export function fetchTags() {
  return (dispatch) => {
    return APIUtil.fetchTags().then(
      (allTags) => dispatch(receiveTags(allTags))
    );
  };
}

export function createTag(tag, noteId) {
  return (dispatch) => {
    return APIUtil.createTag(tag, noteId).then(
      (newTag) => dispatch(makeTag(newTag))
    );
  };
}


export function deleteTag(tag) {
  return (dispatch) => {
    return APIUtil.deleteTag(tag).then(
      (deletedTag) => dispatch(removeTag(deletedTag))
    );
  };
}

export function deleteTagging(tag, noteId) {
  return (dispatch) => {
    return APIUtil.deleteTagging(tag, noteId).then(
      (deletedTagging) => dispatch(removeTagging(deletedTagging))
    );
  };
}

export const removeTagging = (deletedTagging) => {
  return {
    type: REMOVE_TAGGING,
    deletedTagging
  };
};

export const removeZeroIdTag = () => {
  return {
    type: REMOVE_ZERO
  };
};

export const setCurrentTag = (newCurrentTag) => {
  return {
    type: SET_CURRENT_TAG,
    newCurrentTag
  };
};

export const receiveNoteTags = (fetchedNoteTags) => {
  return {
    type: RECEIVE_NOTE_TAGS,
    fetchedNoteTags
  };
};

export const receiveTags = (allTags) => {
  return {
    type: RECEIVE_TAGS,
    allTags
  };
};

export const makeTag = (newTag) => {
  return {
    type: MAKE_TAG,
    newTag
  };
};

export const removeTag = (deletedTag) => {
  return {
    type: REMOVE_TAG,
    deletedTag
  };
};
