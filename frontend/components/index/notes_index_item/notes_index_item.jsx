import React from 'react';
import Moment from 'moment';
import Modal from 'react-modal';
import DeleteNoteModal from './delete_note';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.selectNoteHandler = this.selectNoteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  selectNoteHandler(){
    if (this.props.currentNote &&
      this.props.note.id !== this.props.currentNote.id){
      this.props.setCurrentNote(this.props.note);
    }
  }

  deleteHandler(e){
    let currentId = this.props.currentNote.id;
    let idx = 0;
    let firstAllNotesId = this.props.allNotes[idx].id;

    if (currentId === firstAllNotesId) {
      idx = 1;
    }

    this.props.deleteNote(this.props.note);
    if (this.props.note.id === this.props.currentNote.id){
      this.props.setCurrentNote(null);
    }
    this.props.fetchNotes();
    this.props.fetchTags();
    this.props.setCurrentNote(this.props.allNotes[idx]);
    // if (this.props.tagCount === 0) {
    //   this.props.setCurrentTag(null);
    //   this.props.setCurrentNotebook(null);
    // }
    this.closeDeleteModal();
  }

  renderTitle(){

    //TODO cleanup render title
    if (this.props.note.title === ""){
      return (
        <div className="empty-title">
          Untitled
        </div>
      );
    } else {
      const title = this.props.note.title.slice(0,30);
      if (this.props.note.title.length > 30){
        return (
          <div className="shortened-title">
            { title + "..." }
          </div>
        );
      } else {
        return (
          <div className="regular-title">
            { title }
          </div>
        );
      }
    }
  }

  renderBody(){
    // TODO: cleanup body
    const body = document.createElement("div");
    body.innerHTML = this.props.note.body;
    const bodyText = body.textContent;
    return bodyText;
  }

  render() {

    const itemClassName = (this.props.currentNote &&
                          (this.props.note.id === this.props.currentNote.id)) ?
                          "note-index-item-li selected" : "note-index-item-li";




    return (
      <li className={itemClassName} onClick={this.selectNoteHandler}>
        <div className="note-index-item-title">
          {this.renderTitle()}
          <button
            className="delete-note-button"
            onClick={this.openDeleteModal}></button>
        </div>
        <div className='last-updated'>
          { Moment(this.props.note.updated_at).fromNow() }
        </div>
        <div className="note-index-item-body">
          { this.renderBody() }
        </div>

        <Modal
          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          overlayClassName="notebook-modals-overlay"
          className="notebook-modals"
          shouldCloseOnOverlayClick={false}
          contentLabel="Note index item delete modal">

          <DeleteNoteModal
            deleteNote={this.deleteHandler}
            closeModal={this.closeDeleteModal}
            noteTitle={this.props.note.title} />
        </Modal>

      </li>
    );
  }
}

export default NotesIndexItem;
