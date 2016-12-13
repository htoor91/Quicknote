import { connect } from 'react-redux';
import TagsIndex from './tags_index';

const mapStateToProps = (state) => {
  return ({
    tags: state.tags.allTags
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    closeTagsDrawer: ownProps.closeTagsDrawer
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
