import { connect } from 'react-redux';
import Home from './home';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchTags } from '../../actions/tag_actions';
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
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchTags: () => dispatch(fetchTags()),
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
