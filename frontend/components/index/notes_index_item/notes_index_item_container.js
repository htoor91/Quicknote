import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { deleteNote, fetchNote } from '../../../actions/note_actions';

const mapStateToProps = (state) => {
  return ({
    currentNote: state.notes.currentNote
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteNote: (note) => dispatch(deleteNote(note)),
    setCurrentNote: (note) => dispatch(fetchNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndexItem);
