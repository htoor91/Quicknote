import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h1>Welcome, { currentUser.username }!</h1>
        <button onClick={ logout }>Logout</button>
      </div>
      );
  } else {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <br/>
        <br/>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
};

export default Greeting;
