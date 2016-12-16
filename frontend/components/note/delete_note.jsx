import React from 'react';
// TODO format deleteNOteModal deleteNotebookModal into 1 reusable component
const DeleteNoteModal = ({ deleteNote, closeModal, noteTitle }) => {
  const title = (noteTitle === "") ? "Untitled" : noteTitle;
  return(
    <div className="delete-modal">
      <div className="delete-modal-confirmation">
        Are you sure you want to delete <strong>{title}</strong>{'?'}
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
