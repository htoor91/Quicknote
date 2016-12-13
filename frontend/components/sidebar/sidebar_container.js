import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchNote, fetchNotes, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, createNotebook } from '../../actions/notebook_actions';
import { receiveCurrentTag } from '../../actions/tag_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes,
    notebooks: state.notebooks.allNotebooks,
    currentNotebook: state.notebooks.currentNotebook
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    setCurrentNote: (note) => dispatch(fetchNote()),
    createNote: (note) => dispatch(createNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    setCurrentNotebook: (notebook) => dispatch(fetchNotebook(notebook)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(receiveCurrentTag(tag))

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
