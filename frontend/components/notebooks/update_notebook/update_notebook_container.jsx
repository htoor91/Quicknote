import { connect } from 'react-redux';
import UpdateNotebookModal from './update_notebook';
import { updateNotebook, setCurrentNotebook, fetchNotebooks } from '../../../actions/notebook_actions';


const mapStateToProps = (state) => {
  debugger
  return ({
    currentNotebook: state.notebooks.currentNotebook
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {

  return ({
    closeModal: ownProps.closeModal,
    closeDrawer: ownProps.closeDrawer,
    notebookTitle: ownProps.notebookTitle,
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    fetchNotebooks: () => dispatch(fetchNotebooks())
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateNotebookModal);
