import React from 'react';
import { hashHistory } from 'react-router';
import SideBarContainer from '../sidebar/sidebar_container';
import IndexContainer from '../index/index_container';
import NoteContainer from '../note/note_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newProps) {
    this.redirectIfLoggedOut(newProps);
  }

  redirectIfLoggedOut(newProps) {
    if (!newProps.loggedIn) {
      hashHistory.push("/");
    }
  }

  render(){

    if (this.props.loggedIn) {
      return (
        <div className="home-container">
          <SideBarContainer />

        </div>
      );
    } else {
      return(
        <h1> Need a Loading Thing here</h1>
      );
    }

  }
}



export default Home;
