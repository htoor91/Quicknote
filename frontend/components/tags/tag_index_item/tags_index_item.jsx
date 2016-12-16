import React from 'react';
import Modal from 'react-modal';

class TagsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deleteModalOpen: false
    };

    this.selectTagHandler = this.selectTagHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal(e) {
    e.stopPropagation();
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal(e) {
    this.setState({ deleteModalOpen: false });
  }

  selectTag(){
    this.props.fetchTaggedNotes(this.props.tag);
    this.props.setCurrentTag(this.props.tag);
    this.props.setCurrentNotebook(null);
    this.props.closeDrawer();
  }

  selectTagHandler(){
    if (!this.props.currentTag || this.props.tag.id !== this.props.currentTag.id) {
      this.selectTag();
    }
  }

  deleteHandler(e){
    if (this.props.tagsState[0].tag_name === this.props.tag.tag_name) {
      this.props.removeZeroIdTag();
    }

    this.props.deleteTag(this.props.tag.id);
    this.props.fetchTags();
    this.props.fetchNoteTags(this.props.currentNote);
    this.props.setCurrentTag(null);
    this.props.setCurrentNotebook(null);

  }

  render(){
    return(
      <div className="tag-index-item-container" onClick={ this.selectTagHandler }>
        <div className="tag-index-item-name">{ this.props.tag.tag_name }</div>
        <div className="tag-index-item-count"></div>

        <button
          className="tag-index-item-delete-button"
          onClick={ this.deleteHandler }></button>
      </div>
    );
  }
}

export default TagsIndexItem;
