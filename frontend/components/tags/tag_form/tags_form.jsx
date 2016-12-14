import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class TagForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTags: this.props.tags
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.refreshTags = this.refreshTags.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.note ){
      this.setState({ currentTags: nextProps.tags });
    }
  }

  refreshTags(){
    this.props.fetchNoteTags(this.props.note);
    this.props.fetchtags();
  }

  deleteHandler(idx){
    // this.props.deleteTagging(this.props.tags[idx], this.props.note.id);
    this.refreshTags();
    if (this.props.selectedTag){
      if (this.props.selectedTag.tag_name === this.props.tags[idx].name){
        this.props.fetchTaggedNotes(this.props.selectedTag);
      }
    }
  }

  addHandler(tag){
    this.props.createTag(tag, this.props.note.id);
    this.refreshTags();
    if (this.props.selectedTag){
      if (this.props.selectedTag.tag_name === tag){
        this.props.fetchTaggedNotes(this.props.selectedTag);
      }
    }
  }

  render(){
    return(
      <div className="note-form-tags">
        <ReactTags
            tags={ this.state.currentTags }
            labelField={'tag_name'}
            deleteHandler={ this.deleteHandler }
            addHandler={ this.addHandler }
            allowDeleteFromEmptyInput={false}/>
      </div>
    );
  }
}

export default TagForm;
