const APIUtil = {
  fetchTags() {
    return $.ajax({
      method: "GET",
      url: "/api/tags"
    });
  },

  fetchNoteTags(note) {
    return $.ajax({
      method: "GET",
      url: `/api/notes/${note.id}/tags`
    });
  },

  createTag(tag, noteId){
    return $.ajax({
      method: "POST",
      url: "/api/tags/",
      data: {tag: {tag_name: tag, note_id: noteId}}
    });
  },

  deleteTag(id){
    return $.ajax({
      method: "DELETE",
      url: `/api/tags/${id}`
    });
  },

  deleteTagging(tag, noteId){

    return $.ajax({
      method: "DELETE",
      url: `/api/tagging/${tag.id}`,
      data: {tag: {id: `${tag.id}`, note_id: noteId}}
    });
  }
};

export default APIUtil;
