
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
      data: params
    });
  },

  updateNote(note){
    return $.ajax({
      method: "PATCH",
      url: `/api/notes/${note.id}`,
      data: note
    });
  },

  deleteNote(note) {
    return $.ajax({
      method: "DELETE",
      url: `/api/notes/${note.id}`
    });
  },

};

export default APIUtil;
