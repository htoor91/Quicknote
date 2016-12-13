import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNote } from '../../actions/note_actions';

const mapStateToProps = ( state, ownProps ) => {
  return ({
    currentNote: state.notes.currentNote,
    notes: ownProps.notes
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    setCurrentNote: (note) => dispatch(fetchNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
