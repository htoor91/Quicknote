
import { connect } from 'react-redux';
import TagsIndexItem from './tags_index_item';
import { fetchTaggedNotes, setCurrentNote } from '../../../actions/note_actions';
import { setCurrentNotebook } from '../../../actions/notebook_actions';
import { setCurrentTag, deleteTag, fetchTags, fetchNoteTags } from '../../../actions/tag_actions';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    currentTag: state.tags.currentTag
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    fetchTaggedNotes: (tag) => dispatch(fetchTaggedNotes(tag)),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(setCurrentTag(tag)),
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNoteTags: (note) => dispatch(fetchNoteTags(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndexItem);
