import React from 'react';
import Drawer from 'react-motion-drawer';
import NotebookIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookDrawerOpen: false,
      tagsDrawerOpen: false
    };

    this.logoutHandler = this.logoutHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.allNotesHandler = this.allNotesHandler.bind(this);
    this.notebooksHandler = this.notebooksHandler.bind(this);
    this.tagsHandler = this.tagsHandler.bind(this);
    this.avatarHandler = this.avatarHandler.bind(this);
    this.toggleNotebookDrawer = this.toggleNotebookDrawer.bind(this);
    this.closeNotebookDrawer = this.closeNotebookDrawer.bind(this);
    this.toggleTagsDrawer = this.toggleTagsDrawer.bind(this);
    this.closeTagsDrawer = this.closeTagsDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.notes.length > this.props.notes.length) {
      this.props.setCurrentNote(nextProps.notes[0]);
    }
  }

  logoutHandler() {
    this.props.logout();
  }

  addNoteHandler() {
    const notebookId = this.props.currentNotebook ?
                       this.props.currentNotebook.id :
                       this.props.notebooks[0].id;
    const initialNote = { title: "", body: "<p></p>", notebook_id: notebookId };
    this.props.createNote(initialNote);
    if (this.props.currentTag) {
      this.allNotesHandler();
    }
  }

  allNotesHandler() {
    // No current notebook/tag, since all notes are to be listed
    this.props.setCurrentNotebook(null);
    this.props.setCurrentTag(null);
    this.closeNotebookDrawer();
    this.closeTagsDrawer();
  }

  notebooksHandler() {
    this.toggleNotebookDrawer();
  }

  tagsHandler() {
    this.toggleTagsDrawer();
  }

  avatarHandler() {
    // Pop up modal
  }

  toggleNotebookDrawer() {
    const toggledValue = !this.state.notebookDrawerOpen;

    this.setState({
      notebookDrawerOpen: toggledValue,
      tagsDrawerOpen: false
    });
  }

  closeNotebookDrawer() {
    this.setState({
      notebookDrawerOpen: false
    });
  }

  toggleTagsDrawer() {
    const toggledValue = !this.state.tagsDrawerOpen;

    this.setState({
      tagsDrawerOpen: toggledValue,
      notebookDrawerOpen: false
    });
  }

  closeTagsDrawer() {
    this.setState({
      tagsDrawerOpen: false
    });
  }

  render() {
    const style = {
      background: 'white',
      zIndex: 1,
      marginTop: "-6px",
    };
    const offsetNotebook = (this.state.notebookDrawerOpen) ? 72 : 0;
    const offsetTag = (this.state.tagsDrawerOpen) ? 72 : 0;

    return(
      <div className="sidebar-container">

        <div className="sidebar-logo"></div>

        <div className="addNote-button-container">
          <button className="addNote-button" onClick={this.addNoteHandler}></button>
          <div className="addNote-tooltip">NEW NOTE</div>
        </div>
        <div className="allNotes-button-container">
          <button className="allNotes-button" onClick={this.allNotesHandler}></button>
          <div className="allNotes-tooltip">NOTES</div>
        </div>
        <div className="notebooks-button-container">
          <button className="notebooks-button" onClick={this.notebooksHandler}></button>
          <div className="notebooks-tooltip">NOTEBOOKS</div>
        </div>
        <div className="tags-button-container">
          <button className="tags-button" onClick={this.tagsHandler}></button>
          <div className="tags-tooltip">TAGS</div>
        </div>
        <div className="logout-button-container">
          <button className="logout-button" onClick={this.logoutHandler}></button>
          <div className="logout-tooltip">LOGOUT</div>
        </div>
        <div className="avatar-button-container">
          <button className="avatar-button" onClick={this.avatarHandler}></button>
        </div>

        <Drawer
          className="notebooks-drawer"
          drawerStyle={style}
          open={this.state.notebookDrawerOpen}
          onChange={open => this.setState({ notebookDrawerOpen: open})}
          width={420}
          offset={offsetNotebook}
          config={[400,50]}>
          <NotebookIndexContainer closeNotebookDrawer={ this.closeNotebookDrawer }/>
        </Drawer>

        <Drawer
          className="tags-drawer"
          drawerStyle={style}
          open={this.state.tagsDrawerOpen}
          onChange={open => this.setState({ tagsDrawerOpen: open})}
          width={420}
          offset={offsetTag}
          config={[400,50]}>
          <TagsIndexContainer closeTagsDrawer={ this.closeTagsDrawer }/>
        </Drawer>

      </div>
    );
  }
}

export default Sidebar;
