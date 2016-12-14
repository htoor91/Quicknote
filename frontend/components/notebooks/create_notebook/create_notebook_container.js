import { connect } from 'react-redux';
import CreateNotebookModal from './create_notebook';
import { createNotebook, setCurrentNotebook } from '../../../actions/notebook_actions';

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return ({
    closeModal: ownProps.closeModal,
    closeDrawer: ownProps.closeDrawer,
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  });
};


export default connect(
  null,
  mapDispatchToProps
)(CreateNotebookModal);
