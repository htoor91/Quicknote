import React from 'react';
import Modal from 'react-modal';
import { SessionModalStyle } from '../modal_styles/session_modal_styles';
import SessionFormContainer from '../session_form/session_form_container';

const LoginModal = ({loginModalOpen, closeLoginModal}) => {
  return(
    <Modal
      isOpen={loginModalOpen}
      onRequestClose={closeLoginModal}
      style={ SessionModalStyle }
      contentLabel="Login Modal">
      <h1>Ayyyyy</h1>
      <SessionFormContainer formType={"Log In:"} />
    </Modal>
  );
};

export default LoginModal;
