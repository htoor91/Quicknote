import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
