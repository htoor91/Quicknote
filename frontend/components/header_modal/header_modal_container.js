import { connect } from 'react-redux';
import HeaderModal from './header_modal';
import { login, clearErr } from '../../actions/session_actions';

const mapStateToProps = ( {session } ) => {
  return ({
    loggedIn: !!session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user)),
    clearErr: () => clearErr(dispatch)
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderModal);
