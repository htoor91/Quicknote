import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import { SessionModalStyle } from '../modal_styles/session_modal_styles';
import SessionFormContainer from '../session_form/session_form_container';



class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false
    };

    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
    this.props.clearErr();
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
    this.props.clearErr();
  }

  guestLogin(e) {
    // Fill with demo information (seed demo user creds)
    const guest = { user: { username: "guest", password: "password" } };
    this.props.login(guest);
  }

  componentWillReceiveProps(newProps){
    this.redirectifLoggedIn();
  }

  redirectifLoggedIn(newProps) {
    if (newProps.loggedIn) {
      hashHistory.push("/home");
    }
  }

  // Redirect to home page if you're already logged in
  render() {

    return(
      <div className="content-login group">

        <h2>Remember Everything</h2>
        <p>Notes made simple</p>

        <div className="signup-form">
          <SessionFormContainer formType={"Sign Up"} />
        </div>


        <button className="content-login-button" onClick={this.openLoginModal}>Sign In</button>
        <button className="guest-login-button" onClick={this.guestLogin}>Guest</button>

        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}
          style={ SessionModalStyle }
          className="react-modal"
          contentLabel="Login Modal">
          <h1> Sign In</h1>
          <img
            src={ window.modalIcon }
            className="modal-icon"
            title="Owl"
            width="80" />
          <SessionFormContainer formType={"Log In:"} />
        </Modal>

      </div>

    );

  }
}


export default Splash;
