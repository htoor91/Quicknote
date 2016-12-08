import React from 'react';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router';
import HeaderModalContainer from './header_modal/header_modal_container';

const App = ({ children }) => {
  return (
    <div>
      <header className="header group">
        <div className="header-left group">
          <img
            src={ window.headerIcon }
            className="header-icon"
            title="FastForward"
            width="40" />
          <Link to="/" className="header-link">
            <h1>QUICKNOTE</h1>
          </Link>
        </div>
        <HeaderModalContainer />
      </header>
      <section className="content">
        <video autoPlay muted loop id="bgvid">
          <source src={window.introVideo} type="video/webm"/>
        </video>
        <SplashContainer />
      </section>
      <footer className="footer">
        <p>Organize your life today, with <span>Quicknote</span></p>
      </footer>
      {children}
    </div>
  );
};


export default App;
