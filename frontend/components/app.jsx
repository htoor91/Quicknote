import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Quicknotes</h1>
        </Link>
        <GreetingContainer />
      </header>
      {children}
    </div>
  );
};


export default App;
