
import { connect } from 'react-redux';
import TagsIndexItem from './tags_index_item';
import { fetchTaggedNotes, fetchNote } from '../../../actions/note_actions';
import { fetchNotebook } from '../../../actions/notebook_actions';
import { receiveCurrentTag, deleteTag, fetchTags, fetchNoteTags } from '../../../actions/tag_actions';

const mapStateToProps = state => {
  return ({
    currentNote: state.notes.currentNote,
    currentTag: state.tags.currentTag
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    fetchTaggedNotes: (tag) => dispatch(fetchTaggedNotes(tag)),
    setCurrentNote: (note) => dispatch(fetchNote(note)),
    setCurrentNotebook: (notebook) => dispatch(fetchNotebook(notebook)),
    setCurrentTag: (tag) => dispatch(receiveCurrentTag(tag)),
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNoteTags: (note) => dispatch(fetchNoteTags(note))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndexItem);
