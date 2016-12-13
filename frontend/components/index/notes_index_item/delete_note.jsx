import React from 'react';

const DeleteNoteModal = ({ deleteNote, closeModal, noteTitle }) => {
  return(
    <div className="delete-modal">
      <div className="delete-modal-confirmation">
        Are you sure you want to delete <strong>{noteTitle}</strong>`?`
      </div>
      <button
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
