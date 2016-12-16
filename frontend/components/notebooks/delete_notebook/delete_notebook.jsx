import React from 'react';

const DeleteNotebookModal = ({ deleteNotebook, closeModal, notebookTitle }) => {
  return(
    <div className="delete-modal">
      <div className="delete-modal-confirmation">
        Are you sure you want to delete <strong>{notebookTitle}</strong>{'?'}
      </div>
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
