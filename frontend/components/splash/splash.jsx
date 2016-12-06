import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import { SessionModalStyle } from '../modal_styles/session_modal_styles';



class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true});
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, { this.props.currentUser.username }!</h1>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <br/>
          <Link to="/login">Log In</Link>
          <br/>
          <br/>
          <button onClick={ this.openModal }>Open Modal</button>
          <Modal 
            isOpen={this.state.open}
            style=
          <button onClick={ this.closeModal }>Close Modal</button>
        </div>
      );
    }

  }
}


export default Splash;
