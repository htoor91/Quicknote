import { connect } from 'react-redux';
import Splash from './splash';
import { login, logout, clearErr } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser,
    loggedIn: !!session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    clearErr: () => clearErr(dispatch)
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
