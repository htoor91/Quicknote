import { connect } from 'react-redux';
import Index from './index';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes
  });
};

export default connect(
  mapStateToProps,
  null
)(Index);
