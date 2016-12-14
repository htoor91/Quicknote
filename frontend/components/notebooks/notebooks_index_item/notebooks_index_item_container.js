import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { setCurrentNote, fetchNotes } from '../../../actions/note_actions';
import { setCurrentNotebook, createNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import { setCurrentTag } from '../../../actions/tag_actions';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    currentNotebook: state.notebooks.currentNotebook,
    notes: state.notes.allNotes,
    notebooks: state.notebooks.allNotebooks
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    fetchNotes: () => dispatch(fetchNotes()),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook)),
    setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(setCurrentTag(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndexItem);
