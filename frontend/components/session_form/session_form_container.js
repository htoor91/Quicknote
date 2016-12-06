import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = ( { session } ) => {
  return ({
    loggedIn: !!session.currentUser,
    errors: session.errors
  });
};

const mapDispatchToProps = (dispatch, {location}) => {

  const formType = location.pathname === "/login" ? "Log In:" : "Sign Up:";
  const process = formType === "Log In:" ? login : signup;
  return ({
    formType,
    processForm: (user) => dispatch(process(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
