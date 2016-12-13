import React from 'react';
import Modal from 'react-modal';
import TagsIndexItemContainer from './tag_index_item/tags_index_item_container';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      tagsModalOpen: false
    };

    this.openTagsModal = this.openTagsModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);
  }

  openTagsModal() {
    this.setState({ tagsModalOpen: true });
  }

  closeTagsModal() {
    this.setState({ tagsModalOpen: false });
  }

  renderTags() {
    return(
      <div className="tags-index-list">
        {this.props.tags.map((tag) => (
          <TagsIndexItemContainer
            key={`tag-${tag.tag_name}`}
            tag={ tag }
            closeDrawer={ this.props.closeTagsDrawer } />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="tag-index-container">
        <div className="tag-index-header">
          <div className="tag-index-title">TAGS</div>
        </div>
        { this.renderTags() }
      </div>
    );
  }
}

export default TagsIndex;
