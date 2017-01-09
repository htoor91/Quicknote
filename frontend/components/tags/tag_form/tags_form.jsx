import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class TagForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTags: this.props.tags
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.refreshTags = this.refreshTags.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.note ){
      this.setState({ currentTags: nextProps.tags });
    }
  }

  refreshTags(){
    this.props.fetchNoteTags(this.props.note);
    this.props.fetchTags();
  }

  handleDelete(idx){
    this.props.deleteTagging(this.props.tags[idx], this.props.note.id);
    this.refreshTags();
    if (this.props.selectedTag){
      if (this.props.selectedTag.tag_name === this.props.tags[idx].name){
        this.props.fetchTaggedNotes(this.props.selectedTag);
      }
    }
  }

  handleAddition(tag){
    this.props.createTag(tag, this.props.note.id);
    this.refreshTags();
    if (this.props.selectedTag){
      if (this.props.selectedTag.tag_name === tag){
        this.props.fetchTaggedNotes(this.props.selectedTag);
      }
    }
  }

  tagsList() {
    return this.props.allTags.map((tag) => tag.tag_name);
  }

  render(){
    return(
      <div className="noteview-tags">
        <ReactTags
            tags={ this.state.currentTags }
            suggestions={this.tagsList()}
            minQueryLength={1}
            labelField={'tag_name'}
            handleDelete={ this.handleDelete }
            handleAddition={ this.handleAddition }
            allowDeleteFromEmptyInput={false}/>
      </div>
    );
  }
}

export default TagForm;
