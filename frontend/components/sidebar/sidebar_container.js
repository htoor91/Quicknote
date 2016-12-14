import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { setCurrentNote, fetchNotes, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { fetchNotebooks, setCurrentNotebook, createNotebook } from '../../actions/notebook_actions';
import { setCurrentTag } from '../../actions/tag_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes,
    notebooks: state.notebooks.allNotebooks,
    currentNotebook: state.notebooks.currentNotebook,
    currentTag: state.tags.currentTag
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    createNote: (note) => dispatch(createNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(setCurrentTag(tag))

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
