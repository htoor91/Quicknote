import { connect } from 'react-redux';
import Home from './home';
import { fetchNote, fetchNotes, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { allNotes } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

// Fetch note will fetch the note to display
// Fetch notes will fetch all notes
// Create note will make a new untitled note to then play with
// Edit note will edit the note with new params
// delete note will trash the note

const mapStateToProps = ( { session } ) => {
  return ({
    currentUser: session.currentUser,
    loggedIn: !!session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    fetchNote: (note) => dispatch(fetchNote(note)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (note) => dispatch(deleteNote(note)),
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
