import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { deleteNote, setCurrentNote, fetchNotes } from '../../../actions/note_actions';
import { fetchTags, setCurrentTag, setCurrentNotebook } from '../../../actions/tag_actions';

const mapStateToProps = (state) => {
  return ({
    currentNote: state.notes.currentNote,
    tagCount: state.tags.allTags.length
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteNote: (note) => dispatch(deleteNote(note)),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchTags: () => dispatch(fetchTags()),
    setCurrentTag: (tag) => dispatch(setCurrentTag(tag)),
    setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndexItem);
