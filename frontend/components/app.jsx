import React from 'react';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router';
import { LoginModalContainer } from '.splash/login_modal_container';

const App = ({ children }) => {
  return (
    <div>
      <header className="header">
        <img
          src="https://maxcdn.icons8.com/Color/PNG/24/Animals/elephant-24.png"
          className="header-icon"
          title="Elephant"
          width="40" />
        <Link to="/" className="header-link">
          <h1>Quicknotes</h1>
        </Link>
        <a href="https://icons8.com">Icon pack by Icons8</a>
        <LoginModalContainer />
      </header>
      <section class="content">
        <SplashContainer />
      </section>
      <footer className="footer"></footer>
      {children}
    </div>
  );
};


export default App;
