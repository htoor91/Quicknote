import React from 'react';

const DeleteModal = ({ deleteHandle, closeModal, propTitle }) => {
  const title = (propTitle === "") ? "Untitled" : propTitle;
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
        onClick={ deleteHandle }>Delete
      </button>
    </div>
  );
};

export default DeleteModal;
