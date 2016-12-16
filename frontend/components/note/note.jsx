import React from 'react';
import ReactQuill from 'react-quill';
import Modal from 'react-modal';
import TagFormContainer from '../tags/tag_form/tags_form_container';
import DeleteNoteModal from './delete_note';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentNote || {
      id: 0,
      title: "",
      body: ""
    };

    this.saveTimer;
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.bodyChangeHandler = this.bodyChangeHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.autoSave = this.autoSave.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // TODO Cleaner format
    if (nextProps.currentNote){
      if (nextProps.currentNote.id !== this.state.id){
        if (this.props.currentNote && this.props.notebooks.length > 0){
          clearTimeout(this.saveTimer);
          if (this.props.currentNote.title !== this.state.title || this.props.currentNote.body !== this.state.body){
            this.saveHandler();
          }
        }
        this.setState(nextProps.currentNote);
        this.props.fetchNoteTags(nextProps.currentNote);
      }
    }

  }

  openDeleteModal(e) {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    this.setState({ deleteModalOpen: false });
  }

  autoSave(){
    const oldTitle = this.props.currentNote.title;
    const oldBody = this.props.currentNote.body;
    const newTitle = this.state.title;
    const newBody = this.state.body;
    if ( oldTitle !== newTitle || oldBody !== newBody ){
      this.saveHandler();
    }
  }



  saveHandler(e){
    clearTimeout(this.saveTimer);
    this.props.updateNote(this.state);
    this.props.fetchNotes();
  }

  deleteHandler(e){
    this.props.deleteNote(this.props.currentNote);
    // this.props.setCurrentNote(null);
    this.props.fetchNotes();
    this.props.setCurrentNote(this.props.allNotes[0]);
    this.closeDeleteModal();
  }

  titleChangeHandler(e) {
    // TODO Format into 1 function "update"
    clearTimeout(this.saveTimer);
    this.setState({ title: e.currentTarget.value });
    this.saveTimer = setTimeout( this.autoSave, 2000);
  }

  bodyChangeHandler(text) {
    clearTimeout(this.saveTimer);
    this.setState({ body: text });
    this.saveTimer = setTimeout( this.autoSave, 2000);
  }


  render() {

    // TODO: Add toolsbar, add empty note picture

    if(this.props.noteCount === 0) {
      return (
        <div className="note-container-empty">
          <div className="loader"></div>
        </div>
      );
    } else {
      return(
        <div className='note-container'>

          <div className="note-tools-container">
            <div className="noteview-delete-container">
              <button
                className="noteview-delete-button"
                onClick={this.openDeleteModal}>
              </button>
            </div>

            <div className="noteview-save-container">
              <button
                className="noteview-save-button"
                onClick={this.saveHandler}>
              </button>
            </div>

            <div className="noteview-tags-container">
              <button className="noteview-tags-button"></button>
            </div>
            <TagFormContainer note={this.props.currentNote}/>
          </div>

          <div className="note-header-container">
            <input
              className="note-title-form"
              type='text'
              placeholder='Title your note'
              onChange={this.titleChangeHandler}
              value={this.state.title} />
          </div>
          <div className="note-form-container">
            <ReactQuill
              ref='editor'
              theme='snow'
              value={this.state.body}
              onChange={this.bodyChangeHandler}
              getText={this.getText}></ReactQuill>
          </div>

          <Modal
            isOpen={this.state.deleteModalOpen}
            onRequestClose={this.closeDeleteModal}
            overlayClassName="notebook-modals-overlay"
            className="notebook-modals"
            shouldCloseOnOverlayClick={false}
            contentLabel="Delete Note Modal">

            <DeleteNoteModal
              deleteNote={this.deleteHandler}
              closeModal={this.closeDeleteModal}
              noteTitle={this.state.title}/>
          </Modal>

        </div>
      );
    }
  }
}



export default Note;
