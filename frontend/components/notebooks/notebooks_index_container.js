import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { setCurrentNotebook, deleteNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
  return ({
    currentNotebook: state.notebooks.currentNotebook,
    notebooks: state.notebooks.allNotebooks
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
    closeNotebookDrawer: ownProps.closeNotebookDrawer
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
