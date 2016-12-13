import React from 'react';
import Modal from 'react-modal';
import DeleteNotebookModal from '../delete_notebook/delete_notebook';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false
    };
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.selectNotebookHandler = this.selectNotebookHandler.bind(this);
  }


  openDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: false });
  }

  deleteHandler() {
    if (this.props.currentNotebook && (this.props.notebook.id === this.props.currentNotebook.id)){
      this.props.setCurrentNotebook(null);
    }

    const matchedNotes = this.props.notes.filter( (notes) => note.notebook_id === this.props.notebook.id);
    matchedNotes.map( (note) => {
      if (note.id === this.props.currentNote.id ) {
        this.props.setCurrentNote(null);
      }
    });
    this.props.deleteNotebook(this.props.notebook);
    this.props.fetchNotes();
    this.closeDeleteModal();
  }

  selectNotebook() {
    this.props.setCurrentNotebook(this.props.notebook);
    this.props.setCurrentTag(null);
    this.props.closeDrawer();
  }

  selectNotebookHandler() {
    if (!this.props.currentNotebook || this.props.notebook.id !== this.props.currentNotebook.id){
      this.selectNotebook();
    }
  }

  noteCountRender() {
    const matchedNotes = this.props.notes.filter( (note) => note.notebook_id === this.props.notebook.id)
    return `${ matchedNotes.length } notes`;
  }

  render() {
    const itemClassName = (this.props.currentNotebook &&
                          (this.props.notebook.id === this.props.currentNotebook.id)) ?
                          "notebook-index-item-li selectedNotebook" : "notebook-index-item-li";

    const deleteButtonClassName = (this.props.notebooks.length > 1) ?
                                  "delete-notebook-button" : "delete-notebook-button default-notebook";

    const deleteModalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(237, 237, 237, 0.75)'
      },
      content: {
        position: 'fixed',
        width: '400px',
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        borderRadius: '10px',
        minHeight: '10rem',
        padding: '2rem',
        transform: 'translate(-50%,-50%)',
        boxShadow: '1px 1px 2px black'
      }
    };
    return(
      <li className={itemClassName} onClick={this.selectNotebookHandler}>
        <div className="notebook-index-item-title-container">
          <div className="notebook-index-item-title">
            { this.props.notebook.title }
          </div>
          <button
            className={deleteButtonClassName}
            onClick={this.openDeleteModal}></button>
        </div>
        <div className="notebook-notes-count">
          { this.noteCountRender() }
        </div>
        <div className="notebook-index-item-description">
          { this.props.notebook.description }
        </div>
        <Modal
          isOpen={ this.state.deleteModalOpen }
          onRequestClose={ this.closeDeleteModal }
          style={ deleteModalStyle }
          contentLabel="Notebook delete modal">

          <DeleteNotebookModal
            deleteNotebook={this.handleDelete}
            closeModal={this.closeDeleteModal}
            notebookTitle={this.props.notebook.title}/>

        </Modal>


      </li>
    );
  }


}

export default NotebooksIndexItem;
