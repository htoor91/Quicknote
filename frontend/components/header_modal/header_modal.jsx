import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { SessionModalStyle } from '../modal_styles/session_modal_styles';
import SessionFormContainer from '../session_form/session_form_container';

class HeaderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  openLoginModal() {
    this.setState({ loginModalOpen: true });
  }

  closeLoginModal() {
    this.setState({ loginModalOpen: false });
  }

  componentWillReceiveProps(newProps){
    if (newProps.loggedIn) {
      hashHistory.push("/home");
    }
  }

  render() {

    return(
      <div className="header-login">
        <button className="header-login-button" onClick={this.openLoginModal}>Sign In</button>


        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal}
          style={ SessionModalStyle }
          contentLabel="Login Modal">
          <h1>Ayyyyy</h1>
          <SessionFormContainer formType={"Log In:"} />
        </Modal>
      </div>
      );
    }
}

export default HeaderModal;
