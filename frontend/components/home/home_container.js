import { connect } from 'react-redux';
import Home from './home';
import { fetchNote, fetchNotes, createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { allNotes } from '../../reducers/selectors';


const mapStateToProps = ( state ) => {

  return ({
    allNotes: allNotes(state),
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    fetchNote: (note) => dispatch(fetchNote(note)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (note) => dispatch(deleteNote(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
