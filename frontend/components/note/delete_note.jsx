import React from 'react';
// TODO format deleteNOteModal deleteNotebookModal into 1 reusable component
const DeleteNoteModal = ({ deleteNote, closeModal, noteTitle }) => {
  return(
    <div className="delete-modal">
      <h3 className="delete-modal-confirmation">
        Are you sure you want to delete <strong>{noteTitle}</strong>`?`
      </h3>      <button
        className="delete-cancel-button"
        onClick={ closeModal }>Cancel
      </button>
      <button
        className="delete-button"
        onClick={ deleteNote }>Delete
      </button>
    </div>
  );
};


export default DeleteNoteModal;
