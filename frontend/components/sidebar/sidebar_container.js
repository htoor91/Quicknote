import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchNote, fetchNotes, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (note) => dispatch(createNote()),
    fetchNote: (note) => dispatch(fetchNote())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
