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
  }

  logoutHandler() {
    this.props.logout();
  }

  addNoteHandler() {
    const notebookId = this.props.currentNotebook ?
                       this.props.currentNotbook.id :
                       this.props.notebooks[0].id;
    const initialNote = { title: "", body: "", notebookId: notebookId };
    this.props.createNote(initialNote);
  }

  allNotesHandler() {
    // No current notebook/tag, since all notes are to be listed
    this.props.setCurrentNotebook(null);
    this.props.setCurrentTag(null);
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
      notebookDrawerOpen: toggledValue
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
      tagsDrawerOpen: toggledValue
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
      boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px'
    };

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
          <button className="logout-button" onClick={this.logoutHandler}>LOGOUT</button>
        </div>
        <div className="avatar-button-container">
          <button className="avatar-button" onClick={this.avatarHandler}></button>
        </div>

        <Drawer
          className="notebooks-drawer"
          drawerStyle={style}
          open={this.state.notebookDrawerOpen}
          onChange={open => this.setState({ notebookDrawerOpen: open})}
          width={420}>
          <NotebookIndexContainer closeNotebookDrawer={ this.closeNotebookDrawer }/>
        </Drawer>

        <Drawer
          className="tags-drawer"
          drawerStyle={style}
          open={this.state.tagsDrawerOpen}
          onChange={open => this.setState({ tagsDrawerOpen: open})}
          width={420}>
          <TagsIndexContainer closeTagsDrawer={ this.closeTagsDrawer }/>
        </Drawer>

      </div>
    );
  }
}

export default Sidebar;
