import React from 'react';

const DeleteNotebookModal = ({ deleteNotebook, closeModal, notebookTitle }) => {
  return(
    <div className="delete-modal">
      <h3 className="delete-modal-confirmation">
        Are you sure you want to delete <strong>{notebookTitle}</strong>`?`
      </h3>
      <button
        className="delete-cancel-button"
        onClick={ closeModal }>Cancel
      </button>
      <button
        className="delete-button"
        onClick={ deleteNotebook }>Delete
      </button>
    </div>
  );
};


export default DeleteNotebookModal;
