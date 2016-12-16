import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { deleteNote, setCurrentNote, fetchNotes } from '../../../actions/note_actions';

const mapStateToProps = (state) => {
  return ({
    currentNote: state.notes.currentNote
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteNote: (note) => dispatch(deleteNote(note)),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    fetchNotes: () => dispatch(fetchNotes())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndexItem);
