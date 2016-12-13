import React from 'react';
import NotesIndexItemContainer from './notes_index_item/notes_index_item_container';

// TODO: change to a functional component, clean up render notes, ul outside of function

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if ( !this.props.currentNote && nextProps.notes.length > 0){
      this.props.setCurrentNote(nextProps.notes[0]);
    }
  }

  renderNotes() {
    return(
      <ul className="note-index-item-ul">
        {this.props.notes.map((note, idx) => (
          <NotesIndexItemContainer key={`note-${idx}`} note={note}/>
        ))}
      </ul>
    );
	}

  render() {
    return (
      <div>
        { this.renderNotes() }
      </div>
    );
  }
}

export default NotesIndex;
