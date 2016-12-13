import { connect } from 'react-redux';
import TagForm from './tag_form';
import { fetchTaggedNotes } from '../../../actions/note_actions';
import { createTag, deleteTag, deleteTagging, fetchNoteTags, fetchTags } from '../../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    tags: state.tags.currentNoteTags,
    selectedTag: state.tags.currentTag
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    createTag: (tag, note_id) => dispatch(createTag(tag, note_id)),
    deleteTagging: (tag, note_id) => dispatch(deleteTagging(tag, note_id)),
    fetchNoteTags: (note) => dispatch(fetchNoteTags(note)),
    fetchTags: () => dispatch(fetchTags()),
    fetchTaggedNotes: (tag) => dispatch(fetchTaggedNotes(tag))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
