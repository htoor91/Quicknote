import { connect } from 'react-redux';
import Splash from './splash';
import { login, logout } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser,
    loggedIn: !!session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
