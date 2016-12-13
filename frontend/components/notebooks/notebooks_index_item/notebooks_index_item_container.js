import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { fetchNote, fetchNotes } from '../../../actions/note_actions';
import { fetchNotebook, createNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import { receiveCurrentTag } from '../../../actions/tag_actions';

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
    setCurrentNote: (note) => dispatch(fetchNote(note)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook)),
    setCurrentNotebook: (notebook) => dispatch(fetchNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(receiveCurrentTag(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndexItem);
