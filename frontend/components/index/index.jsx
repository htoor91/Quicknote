import React from 'react';
import NotesIndexContainer from './notes_index_container';

// TODO convert to a functional component

class Index extends React.Component {

  render(){
    let count;
    let title;
    let notes;
    if (this.props.currentNotebook){
      title = this.props.currentNotebook.title;
      notes = notes.filter( (note) => note.notebook_id === this.props.currentNotebook.id )
      count = notes.length;
    } else if (this.props.currentTag){
      title = `TAG: ${this.props.currentTag.tag_name}`;
      notes = this.props.taggedNotes;
      count = notes.length;
    } else {
      title = "NOTES";
      notes = this.props.notes;
      count = this.props.notes.length;
    }

    return(
      <div className="index-container">
        <div className="index-header">
          <div className="index-header-title">{ title }</div>
          <div className="index-header-count">{`${count} notes`}</div>
        </div>

        <div className="notes-index-list">
          <NotesIndexContainer
            notes={ notes }
            currentUser={this.props.user}/>
        </div>
      </div>
    );
  }
}

export default Index;
