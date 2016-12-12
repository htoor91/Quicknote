
const APIUtil = {
  fetchNotes() {
    return $.ajax({
      method: "GET",
      url: "/api/notes"
    });
  },

  fetchNote(note) {
    return $.ajax({
      method: "GET",
      url: `/api/notes/${note.id}`
    });
  },

  createNote(params) {
    return $.ajax({
      method: "POST",
      url: "/api/notes",
      data: { note: params }
    });
  },

  updateNote(note){
    return $.ajax({
      method: "PATCH",
      url: `/api/notes/${note.id}`,
      data: { note: note }
    });
  },

  deleteNote(note) {
    return $.ajax({
      method: "DELETE",
      url: `/api/notes/${note.id}`
    });
  },

  fetchTaggedNote(tag){
    return $.ajax({
      method: "GET",
      url: `/api/tags/${tag.id}`
    });
  }

};

export default APIUtil;
