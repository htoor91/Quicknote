import React from 'react';
import ReactQuill from 'react-quill';
import Modal from 'react-modal';
// import TagFormContainer from '../tags/tag_form/tag_form_container';
// import NotebookSelectContainer from '../notebooks/notebook_select/notebook_select_container';
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
      clearTimeout(this.saveTimer);
      this.props.updateNote(this.state);
    }
  }



  saveHandler(e){
    clearTimeout(this.saveTimer);
    this.props.updateNote(this.state);
  }

  deleteHandler(e){
    this.props.deleteNote(this.props.currentNote);
    this.props.setCurrentNote(null);
    this.closeDeleteModal();
  }

  titleChangeHandler(e) {
    // TODO Format into 1 function "update"
    clearTimeout(this.saveTimer);
    this.setState({ title: e.currentTarget.value });
    this.saveTimer = setTimeout( this.autoSave, 3000);
  }

  bodyChangeHandler(text) {
    clearTimeout(this.saveTimer);
    this.setState({ body: text });
    this.saveTimer = setTimeout( this.autoSave, 3000);
  }


  render() {
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

    if(this.props.noteCount === 0) {
      return (
        <div className="note-container-empty">
          <h1> NOTES ARE EMPTY</h1>
        </div>
      );
    } else {
      return(
        <div className='note-container'>

          <div className="note-tools-container">
            <h1> TOOLS GO HERE </h1>
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
            style={ deleteModalStyle }
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
