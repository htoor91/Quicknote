import React from 'react';
import { Link, hashHistory } from 'react-router';
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
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
  }

  guestLogin(e) {
    // Fill with demo information (seed demo user creds)
    const guest = { user: { username: "guest", password: "password" } };
    this.props.login(guest);
  }

  componentWillReceiveProps(newProps){
    if (newProps.loggedIn) {
      hashHistory.push("/home");
    }
  }

  // Redirect to home page if you're already logged in
  render() {

    return(
      <div className="content-login">

        <h2>Remember Everything</h2>
        <p>Note taking made simple</p>

        <div className="signup-form">
          <SessionFormContainer formType={"Sign Up"} />
        </div>


        <button className="content-login-button" onClick={this.openLoginModal}>Sign In</button>
        <button className="guest-login-button" onClick={this.guestLogin}>Guest</button>

        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}
          style={ SessionModalStyle }
          contentLabel="Login Modal">
          <SessionFormContainer formType={"Log In:"} />
        </Modal>

      </div>

    );

  }
}


export default Splash;
