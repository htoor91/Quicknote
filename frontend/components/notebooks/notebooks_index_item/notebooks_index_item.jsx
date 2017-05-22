import React from 'react';
import Modal from 'react-modal';
import DeleteNotebookModal from '../../modal_styles/delete_modal';
import UpdateNotebookModalContainer from '../update_notebook/update_notebook_container';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false,
      updateModalOpen: false
    };
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.selectNotebookHandler = this.selectNotebookHandler.bind(this);
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }


  openDeleteModal(e) {
    // e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    // e.stopPropagation();
    this.setState({ deleteModalOpen: false });
  }

  openUpdateModal(e) {
    // e.stopPropagation();
    this.setState({ updateModalOpen: true });
  }

  closeUpdateModal(e) {
    // e.stopPropagation();
    this.setState({ updateModalOpen: false });
  }

  deleteHandler() {
    if (this.props.currentNotebook && (this.props.notebook.id === this.props.currentNotebook.id)){
      this.props.setCurrentNotebook(null);
    }

    const matchedNotes = this.props.notes.filter( (note) => note.notebook_id === this.props.notebook.id);
    matchedNotes.map( (note) => {
      if (note.id === this.props.currentNote.id ) {
        this.props.setCurrentNote(null);
      }
    });
    this.props.deleteNotebook(this.props.notebook);
    this.props.fetchNotes();
    this.props.fetchNotebooks();
    this.closeDeleteModal();
  }

  updateHandler() {

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

    return(
      <li className={itemClassName} onClick={this.selectNotebookHandler}>
        <div className="notebook-index-item-title-container">
          <div className="notebook-index-item-title">
            { this.props.notebook.title }
          </div>
          <button
            className={deleteButtonClassName}
            onClick={this.openDeleteModal}></button>
          <button
            className="update-notebook-button"
            onClick={this.openUpdateModal}></button>
        </div>
        <div className="notebook-notes-count">
          { this.noteCountRender() }
        </div>

        <Modal
          isOpen={ this.state.updateModalOpen }
          onRequestClose={ this.closeUpdateModal }
          overlayClassName="notebook-modals-overlay"
          className="notebook-modals"
          shouldCloseOnOverlayClick={false}
          contentLabel="Notebook update modal">

          <UpdateNotebookModalContainer
            closeModal={this.closeUpdateModal}
            notebookTitle={this.props.notebook.title}/>

        </Modal>

        <Modal
          isOpen={ this.state.deleteModalOpen }
          onRequestClose={ this.closeDeleteModal }
          overlayClassName="notebook-modals-overlay"
          className="notebook-modals"
          shouldCloseOnOverlayClick={false}
          contentLabel="Notebook delete modal">

          <DeleteNotebookModal
            deleteHandle={this.deleteHandler}
            closeModal={this.closeDeleteModal}
            propTitle={this.props.notebook.title}/>

        </Modal>




      </li>
    );
  }


}

export default NotebooksIndexItem;
