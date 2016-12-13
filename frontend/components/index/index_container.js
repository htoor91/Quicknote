import { connect } from 'react-redux';
import Index from './index';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    notes: state.notes.allNotes,
    notebooks: state.notebooks.allNotebooks,
    currentNotebook: state.notebooks.currentNotebook,
    taggedNoted: state.notes.taggedNotes,
    currentTag: state.tags.currentTag
  });
};

export default connect(
  mapStateToProps,
  null
)(Index);
