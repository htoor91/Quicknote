const APIUtil = {
  fetchNotebooks() {
    return $.ajax({
      method: "GET",
      url: "/api/notebooks"
    });
  },

  fetchNotebook(notebook) {
    return $.ajax({
      method: "GET",
      url: `/api/notebooks/${notebook.id}`
    });
  },

  createNotebook(params) {
    return $.ajax({
      method: "POST",
      url: '/api/notebooks',
      data: { notebook: params }
    });
  },

  updateNotebook(notebook) {
    return $.ajax({
      method: "PATCH",
      url: `/api/notebooks/${notebook.id}`,
      data: { notebook: notebook }
    });
  },

  deleteNotebook(notebook) {
    return $.ajax({
      method: "DELETE",
      url: `/api/notebooks/${notebook.id}`
    });
  }


};

export default APIUtil;
